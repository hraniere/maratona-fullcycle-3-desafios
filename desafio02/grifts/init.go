package grifts

import (
  "github.com/gobuffalo/buffalo"
	"desafio02/actions"
)

func init() {
  buffalo.Grifts(actions.App())
}
