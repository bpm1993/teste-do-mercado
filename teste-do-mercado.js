var transactionsArray = [];
var countIndex = 0;

function Stock(){
	this.setValues = function(){
		this.code = $("input[name=codeInput]").val();
		this.type = $("input[name=typeInput]").val();
		this.name = $("input[name=nameInput]").val();
		this.quant = $("input[name=quantInput]").val();
		this.price = $("input[name=priceInput]").val();
		this.transaction = $("input[name=transactionInput]:checked").val();
	}
	
	this.setValues();
}

function Cell(stock){
	this.createCell = function(){
		var elm = document.createElement("div");
		elm.classList.add("cell");
		elm.id = "cell" + countIndex;
		$("#transactions").append(elm);
		
		return elm;
	}
	
	this.createContent = function(){
		var elm = document.createElement("label");
		elm.classList.add("transactionTexts");
		switch(this.count){
			case 0:
				elm.innerHTML = this.stock.code;
				elm.style.left = "0%";
				break;
			case 1:
				elm.innerHTML = this.stock.type;
				elm.style.left = "16%";
				break;
			case 2:
				elm.innerHTML = this.stock.name;
				elm.style.left = "32%";
				break;
			case 3:
				elm.innerHTML = this.stock.quant;
				elm.style.left = "48%";
				break;
			case 4:
				elm.innerHTML = this.stock.price;
				elm.style.left = "64%";
				break;
			case 5:
				elm.innerHTML = this.stock.transaction;
				elm.style.left = "80%";
				break;
			default:
				break;
		}
		this.count++;
		document.getElementById(this.element.id).appendChild(elm);
		return elm;
	}
	
	this.configStyleCell = function(){
		var style = this.element.style;
		style.position = "absolute";
		style.width = "99.6%";
		style.height = "30px";
		style.border = "1px solid #f00";
		style.top = countIndex * 31 + "px";
	}
	
	
	this.count = 0;
	this.stock = stock;
	this.element = this.createCell();
	this.configStyleCell();
	this.codeElm = this.createContent();
	this.typeElm = this.createContent();
	this.nameElm = this.createContent();
	this.quantElm = this.createContent();
	this.priceElm = this.createContent();
	this.transactionElm = this.createContent();
	countIndex++;
}

function confirmTransaction(){
	if(	$("input[name=codeInput]").val() &&
		$("input[name=typeInput]").val() &&
		$("input[name=nameInput]").val() &&
		$("input[name=quantInput]").val() &&
		$("input[name=priceInput]").val()){
		var cell = new Cell(new Stock());
		transactionsArray.push(cell);
		clearInputs();
	} else {
		alert("Por favor, preencha todos os dados.");
	}
}

function clearInputs(){
	$("input[name=codeInput]").val("");
	$("input[name=typeInput]").val("");
	$("input[name=nameInput]").val("");
	$("input[name=quantInput]").val("");
	$("input[name=priceInput]").val("");
	$('input[name=transactionInput][value="Compra"]').prop("checked", true);
}