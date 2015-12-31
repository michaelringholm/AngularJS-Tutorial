var cardModel = new CardModel();
cardModel.initControls();

function CardModel() {
	this.initControls = function() {
		console.log('cardModel.initControls() called!')
	}
}


new AngularJSHelper();

function CardController($scope) {
	$scope.cards = [
			{
				Id : 1,
				Title : 'Fox',
				ImgPath : '/AngularJS-Tutorial/resources/images/fox-archer.jpg'
			},
			{
				Id : 2,
				Title : 'Bear',
				ImgPath : '/AngularJS-Tutorial/resources/images/bear.jpg'
			},
			{
				Id : 3,
				Title : "Skeleton",
				ImgPath : '/AngularJS-Tutorial/resources/images/skeleton.jpg'
			} ];
	
	$scope.$watch('cardName', function() {
	    console.log('card changed!');
	    cardModel.initControls();
	});	
}

function AngularJSHelper() {
	// Angular code fails if inside jQuery ready block
	if(angular) {
		console.log("AngularJS is initialized!");
		var cardModule = angular.module('cardModule', []);
		cardModule.controller("CardController", CardController);
	}
	else
		console.log("AngularJS not yet initialized!");

}


///JQUERY

$(function() {
	
});


//////////////////////////// DRAG N DROP /////////////////////////////
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
	var cardId = $(ev.currentTarget).attr("data-card-id");
    ev.dataTransfer.setData("text", cardId);
	//ev.dataTransfer.setData("text", ev.target.id);
	console.log("drag complete!");
}

function drop(ev) {
    ev.preventDefault();
    var cardId = ev.dataTransfer.getData("text");
    var card = $(".card[data-card-id=" + cardId + "]");
    //ev.target.appendChild(document.getElementById(data));
    $(ev.target).append(card);
    console.log($(card.html()));
    console.log("drop complete!");
}