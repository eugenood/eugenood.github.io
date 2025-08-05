{
	"name": "Ubuntu",
	"image": "mcr.microsoft.com/devcontainers/base:jammy",
	"features": {
		"ghcr.io/devcontainers/features/hugo:1": {
			"extended": true
		},
	},
	"forwardPorts": [1313],
	"postCreateCommand": "git submodule update --init",
}
