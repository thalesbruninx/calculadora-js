describe("Teste de divisão", function(){

	var calculadora = require('../../src/js/calculadora.js');

	it("deve retornar 5 para 15 e 3", function() {
		expect(calculadora.dividir(15, 3)).toEqual(5);
	});
	it("deve retornar 2 para 6 e 3 no formato de texto", function(){
		expect(calculadora.dividir('6', '3')).toEqual(2);
	});
	it('deve retornar 1.5 para 4.5 e 3', function(){
		expect(calculadora.dividir(4.5, 3)).toEqual(1.5);
	});
	it('deve retornar "Erro" para divisão por 0', function(){
		expect(calculadora.dividir(5, 0)).toEqual('Erro');
	});
	it('deve retornar 0 para valor 1 inválido', function(){
		expect(calculadora.dividir(undefined, 5)).toEqual(0);
	});
	it('deve retonar 0 para valor 2 inválido', function(){
		expect(calculadora.dividir(5, undefined)).toEqual(0);
	});
	
});