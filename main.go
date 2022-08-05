package main

import (
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
)

type Project struct {
	ID     string   `json:"id"`
	Title  string   `json:"title"`
	Client string   `json:"client"`
	Tags   []string `json:"tags"`
}

var p = []Project{
	{
		ID:     "1",
		Title:  "Project 1",
		Client: "Project 1 Client",
		Tags:   []string{"Tag1", "Tag2", "Tag3"},
	},
	{
		ID:     "2",
		Title:  "Project 2",
		Client: "Project 2 Client",
		Tags:   []string{"Tag6", "Tag3", "Tag5"},
	},
}

func getAllProjects(c echo.Context) error {
	//ADD 2 second wait time to display loading state
	time.Sleep(2 * time.Second)

	c.Response().Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	return c.JSON(http.StatusOK, p)
}

func getProjectByID(c echo.Context) error {
	//ADD 2 second wait time to display loading state
	time.Sleep(2 * time.Second)

	id := c.Param("id")
	var response Project

	for _, project := range p {
		if project.ID == id {
			response = project
		}
	}

	c.Response().Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
	return c.JSON(http.StatusOK, response)
}

func main() {
	e := echo.New()
	//TODO Implement https://echo.labstack.com/middleware/cors/

	e.GET("/projects", getAllProjects)
	e.GET("/projects/:id", getProjectByID)

	e.Logger.Fatal(e.Start(":8080"))
}
