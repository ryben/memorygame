var imgView = document.getElementById("imageView")
	var sliderInterval = document.getElementById("sliderInterval")
	var sliderValueDisplay = document.getElementById("sliderValueDisplay")

	var btnStart = document.getElementById("btnStart")
	var editRangeStart = document.getElementById("rangeStart")
	var editRangeEnd = document.getElementById("rangeEnd")

	var radioOrdered = document.getElementById("radioOrdered")
	var radioRandom = document.getElementById("radioRandom")

	var imageCount = 50
	var currentImageIndex = 0
	var timer;


	sliderInterval.value = 1000
	sliderValueDisplay.innerHTML = sliderInterval.value

	function showImage(index, imageFilepath) {
		constructedPath = imageFilepath.concat("/").concat(index).concat(".jpg") 
		console.log(constructedPath)
	    imgView.src=constructedPath
	}

	function nextRandomInt() {
		do {
			var newRandomInt = Math.floor(Math.random() * (1 + 	parseInt(editRangeEnd.value) - parseInt(editRangeStart.value))) + parseInt(editRangeStart.value);
		} while (currentImageIndex == newRandomInt)
		currentImageIndex = newRandomInt

		return currentImageIndex
	}

	function nextOrderInt() {
		currentImageIndex = currentImageIndex + 1

		if (currentImageIndex > parseInt(editRangeEnd.value)) {
			currentImageIndex = parseInt(editRangeStart.value)
		}

		if (currentImageIndex < parseInt(editRangeStart.value)) {
			currentImageIndex = parseInt(editRangeStart.value)
		}

		return currentImageIndex
	}

	function onSliderChange(value) {
		sliderValueDisplay.innerHTML = value
	}

	function showAll() {
		var multiImgContainer = document.getElementById("multiImgContainer")

		imgView.style.display = "none"
		multiImgContainer.style.display = "block"
		multiImgContainer.innerHTML = ""

		imgWidth = "auto"
		imgHeight = "150"
		
		for (var i=parseInt(editRangeStart.value) ; i<=parseInt(editRangeEnd.value) ; i++) {
			multiImgContainer.innerHTML += "<img width=" + imgWidth + " height=" + imgHeight + " src=\"images\\" + i + ".jpg\">"
		}

		btnStart.style.display = "none"
	}

	function showOne() {
		imgView.style.display = "block"
		multiImgContainer.style.display = "none"
		stop()
	}


	function onTimerTick() {
		if (radioOrdered.checked) {
			showImage(nextOrderInt(),"images")
		} else if (radioRandom.checked) {
			showImage(nextRandomInt(),"images")
		}

		timer = setTimeout(onTimerTick, sliderInterval.value)
	}

	function start() {
		btnStart.style.display = "none"
		imgView.style.display = "block"
		timer = setTimeout(onTimerTick, sliderInterval.value)
	}

	function stop() {
		clearTimeout(timer)
		btnStart.style.display = "block"
		imgView.style.display = "none"
	}
