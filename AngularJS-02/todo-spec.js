describe('HealthSense POC Grid', function () {
    beforeEach(function () {
        browser.get('http://Your Application URL');
        ptor = protractor.getInstance();
    });

    it('should click on the grid link', function () {
        element(by.xpath('//a[contains(text(),"Grid")]')).click();
        expect(element(by.xpath('//h1')).getText()).toEqual('Master Grid');
    });

    it('should enter ID in filter', function () {
        ptor.actions().sendKeys(protractor.Key.HOME).perform();
        element(by.model('Model.ID')).sendKeys('10');
        results = element.all(by.repeater('value in testValues'));
        expect(results.count()).toEqual(5);
        element(by.model('Model.ID')).clear();
        ptor.actions().sendKeys(protractor.Key.SPACE).perform();
    });

    it('should change the number of records per page to 10', function () {
        element(by.xpath('//select')).click();
        element(by.css('option[value="10"]')).click();
        results1 = element.all(by.repeater('value in testValues'));
        expect(results1.count()).toEqual(10);
    });
});