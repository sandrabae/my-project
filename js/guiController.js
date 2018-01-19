ageGroups.forEach(function(d, i){
	controller[d] = false;
});

var activeAgeGroups = ['6','7','8'];
controller["60-69"] = true;
controller["70-79"] = true;
controller["80-89"] = true;

controller["Age Groups"] = "40-49";

categories.slice(0,9).forEach(function(d){
	controller[d] = false;
});

var activeCatGroups = [];


controller["Row Options"] = "Sex";
controller["Column Options"] = "Age Groups";
controller["Cell Options"] = "Categories";


var sexController = null,
ageGroupsControllers = [],
ageController = null,
catGroupsControllers = [],
catController = null;

var gui = new dat.gui.GUI();
gui.remember(controller);
gui.close();

var f1 = gui.addFolder('Row');
rowOptions = f1.add(controller, 'Row Options', ["Sex", "Age Groups", "Categories"]).listen();
updateSex([updateRowVal], 0, "both", f1); //initially sex


var f2 = gui.addFolder('Column');
columnOptions = f2.add(controller, 'Column Options', ["Sex", "Age Groups", "Categories"]).listen();
updateAge([updateRowVal, updateColVal], 1, f2);

var f3 = gui.addFolder('Cell');
cellOptions = f3.add(controller, 'Cell Options', ["Sex", "Age Groups", "Categories"]).listen();
updateCategories([updateRowVal, updateColVal, updateCellVal ], 2, f3); //initally disease


function updateSex(updateFunctions, type, value, folder){
	if(!sexController){
		if(type < 2){
			sexController = folder.add(controller, 'Sex', ["Female", "Male", "Both"]);
		}else{
			sexController = folder.add(controller, 'Sex', ["Female", "Male"]);
		}

		//When sex is selected do something....
		sexController.onFinishChange(function(value) {
		  // Fires when a controller loses focus. fires after selection for gender
		  lowerCaseSex = value.charAt(0).toLowerCase();
		  if (lowerCaseSex.includes("b")){
		  	updateFunctions[type](['m','f']);
		  }else{
		  	updateFunctions[type]([lowerCaseSex]);
		  }

		});
	}
}

function updateAge(updateFunctions, type, folder){
	if(type < 2){
		ageGroups.forEach(function(d){
			var tempController = folder.add(controller, d);
			ageGroupsControllers.push(tempController);
		});

 		//When an age group is selected do something...
 		ageGroupsControllers.forEach(function(d){
 			d.onFinishChange(function(value) {
			  // Fires when a controller loses focus. fires after selection for category
			  if (value){
			  	//add to active
			  	var index = ageGroups.indexOf(this.property);
			  	if (index !== -1) {
			  		activeAgeGroups.push(index.toString());
			  	}
			  }else{
			  	//remove from active
			  	var index = ageGroups.indexOf(this.property);
			  	remove(activeAgeGroups, index.toString());
			  }

			  updateFunctions[type](activeAgeGroups);
			});
 		});
		}else{
			if(!ageController){
	 			ageController = folder.add(controller, 'Age Groups', ageGroups);

	 			//When a category is selected update
				ageController.onFinishChange(function(value) {
				  // Fires when a controller loses focus. fires after selection for category
				  var index = ageGroups.indexOf(value);
				  updateFunctions[type](index);
				});
			}
		}
	}

	function updateCategories(updateFunctions, type, folder){
		if(type < 2){
			categories.slice(0,9).forEach(function(d){
				var tempController = folder.add(controller, d);
				catGroupsControllers.push(tempController);
			});

 		//When an age group is selected do something...
 		catGroupsControllers.forEach(function(d){
 			d.onFinishChange(function(value) {
			  	// Fires when a controller loses focus. fires after selection for category
			  	if (value){
			  	//add to active
			  	var index = categories.slice(0,9).indexOf(this.property);
			  	if (index !== -1) {
			  		activeCatGroups.push(index.toString());
			  	}
			  }else{
			  		//remove from active
			  		var index = categories.slice(0,9).indexOf(this.property);
			  		remove(activeCatGroups, index.toString());
			  	}

			  	updateFunctions[type](activeCatGroups);
			  });
 		});
 	}else{
 		if(!catController){
	 		catController = folder.add(controller, 'Categories', categories.slice(0,9));

			//When a category is selected update
			catController.onFinishChange(function(value) {
			  // Fires when a controller loses focus. fires after selection for category
			  var index = categories.indexOf(value);
			  updateFunctions[type](index);
			});
 		}
	}
}

function addOrRemoveFolder(value, folder, type){
	var updateFunctions = [updateRowVal, updateColVal, updateCellVal ];
	console.log(value);
	if (value.includes("Sex")){ updateSex(updateFunctions, type, value, folder);}
	else{
		if(sexController){
			sexController.remove();
			sexController = null;
		}
	}

	if(value.includes("Age")){ updateAge(updateFunctions, type, folder);}
	else{
		if(type < 2){
			ageGroupsControllers.forEach(function(d){
				d.remove();
			});
			ageGroupsControllers = [];
		}else{
			if(ageController){
				ageController.remove();
				ageController = null;
			}
		}
	}

	if(value.includes("Cat")){ updateCategories(updateFunctions, type, folder);}
	else{
		if(type < 2){
			catGroupsControllers.forEach(function(d){
				d.remove();
			});
			catGroupsControllers = [];
		}
		else{
			if(catController){
				catController.remove();
				catController = null;
			}
		}
	}

}

//Error Checks...
rowOptions.onFinishChange(function(value){
	//f1
	updateAllocation(value, 'row')
	addOrRemoveFolder(value, f1, 0);
});

columnOptions.onFinishChange(function(value){
	//f2
	updateAllocation(value, 'col')
	addOrRemoveFolder(value, f2, 1);
});

cellOptions.onFinishChange(function(value){
	//f3
	updateAllocation(value, 'cell')
	addOrRemoveFolder(value, f3, 2);
});

function remove(array, element) {
	const index = array.indexOf(element);

	if (index !== -1) {
		array.splice(index, 1);
	}
}