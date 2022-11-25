describe("Teste de subtração", function(){
	var calculadora = require ('../../src/js/calculadora.js');

	it("deve retornar 5 para 8 e 3", function(){
		expect(calculadora.subtrair(8, 3)).toEqual(5);
	});

	it("deve retornar 5 para 8 e 3 em formato texto", function(){
		expect(calculadora.subtrair('8', '3')).toEqual(5);
	});

	it("deve retornar 4 para 5.5 e 1.5", function(){
		expect(calculadora.subtrair(5.5, 1.5)).toEqual(4);
		expect(calculadora.subtrair('5.5', '1.5')).toEqual(4);
	});

	it("deve retornar 0 para o valor 1 inválido", function(){
		expect(calculadora.subtrair(undefined, 5)).toEqual(0);
	});

	it("deve retornar 0 se o valor 2 for inválido", function(){
		expect(calculadora.subtrair(5 , undefined)).toEqual(0);
	});
});