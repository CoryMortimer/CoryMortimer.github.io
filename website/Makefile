stop:
	-docker stop website-container
	-docker rm website-container

run: stop
	docker run -p 4000:4000 -v $(shell pwd):/srv/jekyll --name website-container -ti jekyll/jekyll jekyll serve
