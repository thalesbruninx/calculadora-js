describe('Teste de multiplicar', function() {
	var calculadora = require('../../src/js/calculadora.js');

	it('deve retornar 6 para 2 e 3', function() {
		expect(calculadora.multiplicar(2, 3)).toEqual(6);
	});
	it('deve retornar 6 para 2 e 3 em formato de texto', function() {
		expect(calculadora.multiplicar('2', '3')).toEqual(6);
	});
	it('deve retornar 4.5 para valor 1.5 e 3', function() {
		expect(calculadora.multiplicar(1.5, 3)).toEqual(4.5);
	});
	it('deve retornar 0 para valor 1 inválido', function(){
		expect(calculadora.multiplicar(undefined, 4)).toEqual(0);
	});
	it('deve retornar 0 para valor 2 inválido', function(){
		expect(calculadora.multiplicar(4, undefined)).toEqual(0);
	});
	
});