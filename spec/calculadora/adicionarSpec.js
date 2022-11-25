describe("Teste de adiçao", function(){

	var calculadora = require('../../src/js/calculadora.js');

	it("deve retornar 5 para 2 e 3", function(){
		expect(calculadora.adicionar(2, 3)).toEqual(5);
	});

	it("deve retornar 6 para 9  e -3 no formato texto", function(){
		expect(calculadora.adicionar('-3','9')).toEqual(6);
	});

	it("deve retornar 4.5 para 3 e 1.5", function(){
		expect(calculadora.adicionar(1.5, 3)).toEqual(4.5);
	});
	it("deve retornar 0 quando o valor 1 não for numérico", function() {
		expect(calculadora.adicionar(undefined, 10)).toEqual(0);
	});

	it("deve retornar 0 quando o valor 2 não for numérico", function(){
			expect(calculadora.adicionar(10, undefined)).toEqual(0);
	});
});