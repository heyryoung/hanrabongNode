		var input
		const compo = {
				div(id,content){
					const div = document.createElement('div')
					div.setAttribute('id',id)
					div.setAttribute('style','border : 1px solid black')
					div.innerHTML = content
					return div
				},
				inputText(id){
					const inputText = document.createElement('input')
					inputText.setAttribute('style','border slolid bordder : black')
					inputText.setAttribute('id',id)
					return inputText
				},
				inputButton(id, val){
					const inputButton = document.createElement('input')
					inputButton.setAttribute('type','button')
					inputButton.setAttribute('value',val)
					inputButton.setAttribute('id',id)
					return inputButton
				},
				br(){
					return document.createElement('br')
				},
				img(imgSrc){
					const img = document.createElement('img')
					img.setAttribute('src',imgSrc)
					img.setAttribute('id','img')
					img.setAttribute('width',250)
					img.setAttribute('height',300)
					return img
				}
		}


/* 		function Div(){
			this.make = function(id, content){
				const div = document.createElement('div')
				div.setAttribute('id',id)
				div.setAttribute('style','border : 1px solid black')
				div.innerHTML = content
				return div
			}
		}		
		function InputText(){
			this.make = function(id ){
				const inputText = document.createElement('input')
				inputText.setAttribute('style','border slolid bordder : black')
				inputText.setAttribute('id','val')
				return inputText
			}
		}
		function Br(){
			this.make = function(){
				const br = document.createElement('br')
				return br
			}
		}
		function InputButton(){
			this.make = function(){
				const inputButton = document.createElement('input')
				inputButton.setAttribute('type','button')
				inputButton.setAttribute('value','val')
				inputButton.setAttribute('id','btn')

				return inputButton
			}
		}
		Factory = function(type) {
			switch(type){
				case 'inputText' : return new InputText()
				case 'inputButton' : return new InputButton()
				case 'br' : return new Br()
				case 'div' : return new Div()
				}
		} */