import filterContent from "helpers/filterContent"

describe("Filter content", ()=>{
    let data, result;


    beforeEach(() =>{
        data = [
            {
                id: 1,
                type: 'car',
                brand: 'Bugatti Veyron',
                colors: ['red', 'black'],
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg'
            },
            {
                id: 2,
                type: 'airplane',
                brand: 'Boeing 787 Dreamliner',
                colors: ['red', 'white', 'black', 'green'],
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg/600px-All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg'
            },
            {
                id: 4,
                type: 'airplane',
                brand: 'Canadair North Star',
                colors: ['red', 'blue', 'yellow', 'green'],
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/BOAC_C-4_Argonaut_Heathrow_1954.jpg/600px-BOAC_C-4_Argonaut_Heathrow_1954.jpg'
            },
        ]

    });

    it('perform filters', () => {
        var arr =[];
        arr['FILTER_VEHICLE'] = {field:"type", filter:"airplane"}
        result = filterContent(data, arr)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(2)

        //add filter
        arr['FILTER_VEHICLE_COLOR'] = {field:"colors", filter:"red"}
        result = filterContent(data, arr)
        
        // combine filter
        arr['FILTER_VEHICLE_BRAND'] = {field:"brand", filter: 'Boeing 787 Dreamliner'}
        result = filterContent(data, arr)
        expect(result.length).toBe(1)

       // combine filter
        arr['none'] = {field:"brand", filter: ''}
        result = filterContent(data, arr)
        expect(result.length).toBe(1)
        
        // remover filter FILTER_VEHICLE_BRAND
        arr['FILTER_VEHICLE_BRAND'] = {field:"brand", filter: '0'}
        result = filterContent(data, arr)
        expect(result.length).toBe(2)

    });
    // beforeEach(() =>{
    // }

})