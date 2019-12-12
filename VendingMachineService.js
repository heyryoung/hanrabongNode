			const service = {
				vendingMachine(){
					VendingMachine.prototype.setChange = function(change){_change = change}
					VendingMachine.prototype.getChange = function(){return _change}

					VendingMachine.prototype.setItemNo = function(itemNo){_itemNo = itemNo}
					VendingMachine.prototype.getItemNo = function(){return _itemNo}

					VendingMachine.prototype.setItemNoList = function(itemNoList){_itemNoList = itemNoList}
					VendingMachine.prototype.getItemNoList = function(){return _itemNoList}

					VendingMachine.prototype.setItemList =function(itemList){_itemList = itemList}
					VendingMachine.prototype.getItemList = function(){return _itemList}
				},
				insertCoin(coin){
					const vm = new VendingMachine()
					this.vendingMachine()
					vm.setChange(coin)
					return vm.getChange(coin)
				},
				selectItem(itemNo){
					const vm = new VendingMachine()
					vm.setItemNo(itemNo)
					return (vm.getItemList().find(i=>i.id ==itemNo))
				},
				returnChange(cnt){
					const vm = new VendingMachine()					
					return vm.getChange() - ((vm.getItemList().find(i=>i.id ==vm.getItemNo())).price*cnt)
				},
				handleOrder(quantity, price, itemName ){}
			}	

