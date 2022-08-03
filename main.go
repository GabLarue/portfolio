package main

import (
	"fmt"
)

type project struct {
	ID       string   `json:"id"`
	Title    string   `json:"title"`
	Client   string   `json:"client"`
	ImageURL string   `json:"image_url"`
	Tags     []string `json:"tags"`
}

func main() {
	fmt.Println("Hello")
}
