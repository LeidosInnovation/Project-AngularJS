describe("Unit: aboutController tests", function () {

    // setup code for testing this unit
    var controller;
    beforeEach(function () {
        module('angularjsApp');

        inject(function ($controller) {
            controller = $controller('aboutController');
        });

    });

    it("PASSING TEST - should be able to display a title", function () {
        expect(controller.message).toBe('I am passed');
    });

    it("FAILING TEST - should be able to display a title", function () {
        expect(controller.message).toBe('fail fail fail');
    });

    it("PASSING TEST - should send message and result be printed", function () {
        controller.message = 2;
        expect(controller.result).toEqual(4);
    });

});