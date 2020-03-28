-- ***************************************************************************************************************************************************************************
--MEASURES
--1)Tablespoon
--2)Cup
--3)Ounce
--4)Each
--5)Teaspoon
-- ***************************************************************************************************************************************************************************

INSERT INTO measures
(name, createdAt, updatedAt)
VALUES
('Tablespoon','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO measures
(name, createdAt, updatedAt)
VALUES
('Cup','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO measures
(name, createdAt, updatedAt)
VALUES
('Ounce','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO measures
(name, createdAt, updatedAt)
VALUES
('Each','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO measures
(name, createdAt, updatedAt)
VALUES
('Teaspoon','2020-01-27 12:18:01', '2020-01-27 01:18:01');

-- ***************************************************************************************************************************************************************************
--INGREDIENTS
--1)chicken strips
--2)crushed dry stuffing mix
--3)butter
--4)Pancake mix
--5)Water
--6)Apples
--7)Cream Cheese
--8)Sugar
--9)Brown Sugar
--10)Vanilla Extract
--11)Chocolate Chips
--12)Pecans
--13)Salmon
--14)Salt
--15)Pepper
--16)Dill
--17)Lemon
--18)Pesto Basil Sauce
--19)Pizza Crust
--20)Shredded Cheese
-- ***************************************************************************************************************************************************************************

INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Chicken tenderloins','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Crushed dry stuffing mix','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Butter','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Pancake mix','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Water','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Apples','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Cream Cheese','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Sugar','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Brown Sugar','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Vanilla Extract','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Chocolate Chips','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Pecans','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Salmon','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Salt','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Pepper','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Dill','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Lemon','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Pesto Basil Sauce','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Pizza Crust','2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO ingredients
(name, createdAt, updatedAt)
VALUES
('Shredded Cheese','2020-01-27 12:18:01', '2020-01-27 01:18:01');

-- ***************************************************************************************************************************************************************************
--RECIPES
--1)Golden Chicken Tenders
--2)Apple Cider Country Pancakes
--3)Chocolate Cheese Ball
--4)Baked Salmon
--5)Chicken Pesto Pizza
-- ***************************************************************************************************************************************************************************

INSERT INTO recipes
(type, description, instructions, image, createdAt, updatedAt)
VALUES
('Golden Chicken Tenders','Delicious Golden Chicken Tenders Yumm', 
'Preh,eat oven to 350 degrees F (175 degrees C). Line a 9x13 inch baking dish with foil. Rinse and pat dry the chicken and place in the baking dish. Combine the stuffing mix with the melted butter or margarine. Place stuffing mixture on top of the chicken tenders. Bake in the preheated oven for 40 minutes.',
'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1527315.jpg&w=595&h=595&c=sc&poi=face&q=85', '2020-01-27 12:18:01', '2020-01-27 01:18:01');

INSERT INTO recipes
(type, description, instructions, image, createdAt, updatedAt)
VALUES
('Apple Cider Country Pancakes','Pancakes Made with apple slices and butter', 
'Combine pancake mix and water in a large bowl; mix well. Stir in diced apples. Place batter in the refrigerator to rest, about 15 minutes. Heat sugar in a large saucepan over medium heat, stirring constantly, until it melts into a thick amber-colored liquid, about 5 minutes. Reduce heat to low. Add apple cider slowly to the saucepan, stirring constantly, until mixture is the consistency of syrup, about 5 minutes. Remove from heat and cover. Heat a lightly greased skillet over medium-high heat. Drop a scant 1/4 cup of batter into the skillet and cook until bubbles form and the edges are dry, 1 to 2 minutes. Flip and cook until golden brown on the other side, 1 to 2 minutes. Repeat with remaining batter. Serve with cider syrup.',
'https://images.media-allrecipes.com/userphotos/720x405/3473331.jpg', '2020-01-27 12:18:01', '2020-01-27 01:18:01');

INSERT INTO recipes
(type, description, instructions, image, createdAt, updatedAt)
VALUES
('Chocolate Cheese Ball','A sweet switch from the ususal cheese ball', 
'In a medium bowl, beat together cream cheese and butter until smooth. Mix in confectioners sugar, brown sugar and vanilla. Stir in chocolate chips. Cover, and chill in the refrigerator for 2 hours. Shape chilled cream cheese mixture into a ball. Wrap with plastic, and chill in the refrigerator for 1 hour. Roll the cheese ball in finely chopped pecans before serving.',
'https://images.media-allrecipes.com/userphotos/720x405/254954.jpg', '2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO recipes
(type, description, instructions, image, createdAt, updatedAt)
VALUES
('Baked Salmon','Baked Salmon with dill and lemon', 
'Season salmon with dill, lemon, salt and pepper. Place salmon, skin side down, on a non-stick baking sheet or in a non-stick pan with an oven-proof handle. Bake until salmon is cooked through, about 12 to 15 minutes. Garnish with Lemon slices',
'https://addapinch.com/wp-content/uploads/2013/04/lemon-dill-salmon-DSC_2511-crop-3.jpg', '2020-01-27 12:18:01', '2020-01-27 01:18:01');
INSERT INTO recipes
(type, description, instructions, image, createdAt, updatedAt)
VALUES
('Chicken Pesto Pizza','Simple pizza with cheese, pesto and chicken', 
'Preheat the oven to 450 degrees F (230 degrees C). Spread pesto sauce over the pizza crust. Arrange chicken pieces and artichoke hearts over the sauce, and sprinkle with cheese. Bake for 8 to 10 minutes in the preheated oven, until cheese is melted and lightly browned at the edges.',
'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3554566.jpg&w=596&h=596&c=sc&poi=face&q=85', '2020-01-27 12:18:01', '2020-01-27 01:18:01');

-- ***************************************************************************************************************************************************************************
--RECIPEINGREDIENTS
-- ***************************************************************************************************************************************************************************

INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(9,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 1, 3, 1);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(1,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 2, 2, 1);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(2,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 3, 1, 1);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(2,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 4, 2, 2);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(2,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 5, 2, 2);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(2,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 6, 4, 2);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(8,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 7, 3, 3);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(1,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 8, 2, 3);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(2,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 9, 1, 3);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(1,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 10, 5, 3);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(1,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 11, 2, 3);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(1,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 12, 2, 3);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(1,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 3, 2, 3);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(12,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 13, 3, 4);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(1,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 14, 1, 4);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(1,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 15, 1, 4);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(1,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 16, 1, 4);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(1,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 17, 4, 4);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(2,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 1, 2, 5);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(1,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 18, 2, 5);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(1,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 19, 4, 5);
INSERT INTO recipeingredients
(amount, createdAt, updatedAt, IngredientID, MeasureID, RecipeID)
VALUES
(1,'2020-01-27 12:18:01', '2020-01-27 01:18:01', 20, 2, 5);
-- ***************************************************************************************************************************************************************************
--INGREDIENTS
--1)chicken tenderloins
--2)crushed dry stuffing mix
--3)butter
--4)Pancake mix
--5)Water
--6)Apples
--7)Cream Cheese
--8)Sugar
--9)Brown Sugar
--10)Vanilla Extract
--11)Chocolate Chips
--12)Pecans
--13)Salmon
--14)Salt
--15)Pepper
--16)Dill
--17)Lemon
--18)Pesto Basil Sauce
--19)Pizza Crust
--20)Shredded Cheese
--
-- ***************************************************************************************************************************************************************************
-- ***************************************************************************************************************************************************************************
--MEASURES
--1)Tablespoon
--2)Cup
--3)Ounce
--4)Each
--5)Teaspoon
-- ***************************************************************************************************************************************************************************