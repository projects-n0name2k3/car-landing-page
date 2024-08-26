import suv1 from "../assets/suv1.png";
import suv2 from "../assets/suv2.png";
import suv3 from "../assets/suv3.png";
import suv4 from "../assets/suv4.png";
import sedan1 from "../assets/sedan1.png";
import sedan2 from "../assets/sedan2.png";
import sedan3 from "../assets/sedan3.png";
import sedan4 from "../assets/sedan5.png";
import offroad2 from "../assets/offroad2.png";
import roadster1 from "../assets/roadster2.png";
import vf1 from "../assets/vf1.png";
import vf2 from "../assets/vf2.png";
import vfs1 from "../assets/vfs1.png";
import vfs2 from "../assets/vfs2.png";
export const sedan = [
  {
    image: sedan1,
    name: "Mercedes Maybach S680 4MATIC",
    speed: 250,
    power: 612,
    engine: "V12 6.0L",
    fuel: "Petrol",
    tank: 76,
    gear: "Automatic",
  },
  {
    image: sedan2,
    name: "Mercedes C300 4MATIC",
    speed: 250,
    power: 258,
    engine: "V2.0 4.0L",
    fuel: "Petrol",
    tank: 70,
    gear: "Automatic",
  },
  {
    image: sedan3,
    name: "Mercedes EQS 500 4MATIC",
    speed: 210,
    power: 330,
    engine: "2 Electric Motors",
    fuel: "Electric",
    tank: 108.4,
    gear: "Automatic",
  },
  {
    image: sedan4,
    name: "Mercedes C200 Exclusive",
    speed: 239,
    power: 184,
    engine: "V2.0 4.0L",
    fuel: "Petrol",
    tank: 66,
    gear: "Automatic",
  },
];

export const suv = [
  {
    image: suv1,
    name: "Mercedes Maybach GLS 600 4MATIC",
    speed: 250,
    power: 558,
    engine: "V8.0 4.0L",
    fuel: "Petrol",
    tank: 90,
    gear: "Automatic",
  },
  {
    image: suv2,
    name: "Mercedes SUV EQS",
    speed: 180,
    power: 516,
    engine: "2 Electric Motors",
    fuel: "Electric",
    tank: 108.4,
    gear: "Automatic",
  },
  {
    image: suv3,
    name: "Mercedes Benz GLC 300 4MATIC",
    speed: 239,
    power: 258,
    engine: "V2.0 4.0L",
    fuel: "Petrol",
    tank: 66,
    gear: "Automatic",
  },
  {
    image: suv4,
    name: "Mercedes Maybach GLS 480 4MATIC",
    speed: 250,
    power: 558,
    engine: "V8.0 4.0L",
    fuel: "Petrol",
    tank: 90,
    gear: "Automatic",
  },
];

export const offroad = [
  {
    image: offroad2,
    name: "Mercedes Benz G63",
    speed: 220,
    power: 585,
    engine: "V8.0 4.0L",
    fuel: "Petrol",
    tank: 96,
    gear: "Automatic",
  },
];

export const roadster = [
  {
    image: roadster1,
    name: "Mercedes Benz ???",
    speed: 220,
    power: 585,
    engine: "V8.0 4.0L",
    fuel: "Petrol",
    tank: 96,
    gear: "Automatic",
  },
];

export const sedanData = [
  {
    name: "EQS Sedan",
    price: 5009000000,
    isElectric: true,
    brand: "Mercedes",
    type: "Sedan",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0hdqtyO67PobzIr3eWsrrCsdRRzwQZv9IZbMw3SGtGyMtsd2vtcUfp8cXGEuiRJ0l34AOB2NQnbApj7bI5ux52QC31vTkzNBTnm7jA6IhKV5Kh%25vqCBlyLRznyYax7oxrH1KMun8wsOcoiZU7pM4FGTJTg906V6PDBGlSeWAhItsd5kdcUfSA1XGEvTSJ0lL6qOB2abRbApHYpI5usoJQC3UC1kzNGtNm7j0O3hKVB%25t%25vqA8TyLRiO6Yax4JOroYhfldsbbAp7oMIkb1ECQmIFUrkzNUU6m7jscWhKVzsM%25vq7UcyLRKOyYaxvODrH1peKn8wiA2oiZ45gM4zuA1YtEWpTuP6CPDAFIT9ZxeedNtjD%259j6hVNpLpIZIGwC7Ux0wPfejr9j&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0hdqtyO67PobzIr3eWsrrCsdRRzwQZv9IZbMw3SGtGyMtsd2vtcUfp8cXGEuiRJ0l34AOB2NQnbApj7bI5ux52QC31vTkzNBTnm7jA6IhKV5Kh%25vqCBlyLRznyYax7oxrH1KMun8wsOcoiZU7pM4FGTJTg906V6PDBGlSeWAhItsd5kdcUfSA1XGEvTSJ0lL6qOB2abRbApHYpI5usoJQC3UC1kzNGtNm7j0O3hKVB%25t%25vqA8TyLRiO6Yax4JOroYhfldsbbAp7oMIkb1ECQmIFUrkzNUU6m7jscWhKVzsM%25vq7UcyLRKOyYaxvODrH1peKn8wiA2oiZ45gM4zuA1YtEWpTuP6CPDAFIT9ZxeedNtjD%259j6hVNpLpIZIGwC7Ux0wPfejr9j&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "A-Class",
    price: 2429000000,
    isElectric: false,
    brand: "Mercedes",

    type: "Sedan",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtGyItsd2sDcUfp8qXGEubYJ0l36xOB2NbFbApRnyI5ux5xQC31SFkzNBTwm7jAeShKV5YL%25vq4t9yLRgY6Yax%25XqrH1yC%25n8w0zEoiZB%25YM4FAOFTg9LQO6PDacpSeWHyhtsd8oxcUfDrNXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIrTg97hN6PD4cmSeWq17tsdUvTcUfGLqXGE0nYJ0lBDtOB2Mr1bA4wHEcmqN1Iw4jiCFqpnIu2fzzjFm93Su9Q6DF1s1n2nvligKfLlCVz9Xu9&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",

    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtGyItsd2sDcUfp8qXGEubYJ0l36xOB2NbFbApRnyI5ux5xQC31SFkzNBTwm7jAeShKV5YL%25vq4t9yLRgY6Yax%25XqrH1yC%25n8w0zEoiZB%25YM4FAOFTg9LQO6PDacpSeWHyhtsd8oxcUfDrNXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIrTg97hN6PD4cmSeWq17tsdUvTcUfGLqXGE0nYJ0lBDtOB2Mr1bA4wHEcmqN1Iw4jiCFqpnIu2fzzjFm93Su9Q6DF1s1n2nvligKfLlCVz9Xu9&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "C-Class",
    price: 1599000000,
    isElectric: false,
    brand: "Mercedes",

    type: "Sedan",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqaSFqtyO67PobzIr3eWsrrCsdRRzwQZUkRZbMw3SGtlaWtsd2HVcUfpOkXGEubSJ0l3IrOB2NS1bApjI9I5uxoNQC31C1kzNwzkm7jZ73hKV5Kh%25vqCuqyLRgcDYaxPXSrH1eMdn8wsofoiZUMNM4FAmjTg95hp6PDCroSeWHmMtsd8s3cUfiFWXGE4JmJ0lgOrOB2Pz2bApe79I5uKMTQmIJwF1H66PDGmhSc63ZstXSV8TcUf8FfXGEHnxJ0lUHrOB2Gg%25bApFfLI5uC4JQC3zgFkzN7PKm7jKeShKVv0V%25vGdeNQnF1Wydaj%25XxcqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHlkRl&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqaSFqtyO67PobzIr3eWsrrCsdRRzwQZUkRZbMw3SGtlaWtsd2HVcUfpOkXGEubSJ0l3IrOB2NS1bApjI9I5uxoNQC31C1kzNwzkm7jZ73hKV5Kh%25vqCuqyLRgcDYaxPXSrH1eMdn8wsofoiZUMNM4FAmjTg95hp6PDCroSeWHmMtsd8s3cUfiFWXGE4JmJ0lgOrOB2Pz2bApe79I5uKMTQmIJwF1H66PDGmhSc63ZstXSV8TcUf8FfXGEHnxJ0lUHrOB2Gg%25bApFfLI5uC4JQC3zgFkzN7PKm7jKeShKVv0V%25vGdeNQnF1Wydaj%25XxcqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHlkRl&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "E-Class",
    price: 2159000000,
    isElectric: false,
    brand: "Mercedes",

    type: "Sedan",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrSFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlaWtsd2HVcUfpOyXGEuTRJ0l3OZOB2qrnbApRn3I5ux5IQC30CQkzNBlkm7j86ZhKViSM%25vq4r9yLRgY6Yax%250qrH1yM%25n8w0z4oiZB7NM4FAyrTg95Ye6PDakbSeWHeutsd8ZDcUfiXkXGE4JYJ0lgChOB2PzFbAp7dbI5uKMTQmIJwF1H66PDGmhSc63ZstXSV8tcUfarRXGEsaYJ0lU4hOB2GQnbApF0MI5uCoMQC3zgFkzN7PKm7jKhIhKUWP3IrZxD%25WLkDcVjVS%25qjuaa1frEROqEyJlfDADSjSiNsG8u4NLwaEQqE&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrSFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlaWtsd2HVcUfpOyXGEuTRJ0l3OZOB2qrnbApRn3I5ux5IQC30CQkzNBlkm7j86ZhKViSM%25vq4r9yLRgY6Yax%250qrH1yM%25n8w0z4oiZB7NM4FAyrTg95Ye6PDakbSeWHeutsd8ZDcUfiXkXGE4JYJ0lgChOB2PzFbAp7dbI5uKMTQmIJwF1H66PDGmhSc63ZstXSV8tcUfarRXGEsaYJ0lU4hOB2GQnbApF0MI5uCoMQC3zgFkzN7PKm7jKhIhKUWP3IrZxD%25WLkDcVjVS%25qjuaa1frEROqEyJlfDADSjSiNsG8u4NLwaEQqE&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "S-Class",
    price: 5039000000,
    isElectric: false,
    brand: "Mercedes",

    type: "Sedan",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqbWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtlKStsd2HtcUfpOyXGEuTRJ0l36AOB2NbcbApj7bI5uVKDQC31MOkzNwPnm7jZeIhKV5SM%25vqCtkyLRzcHYax7aYrH1KCRn8wvzboiZL6NM4FamrTg9HhT6PDBcpSeWAXStsd5ZQcUfCF6XGEzJSJ0l7OZOB2XrmbApJAVI5u84zQC3igwkzN4U9m7jgOFhKVBSQ%25vqAv9yLR5ORYaxCNqrH1zntn8w7oboiZKeXM4FvswTg9wtn6PDGkNSeW0h%25tXSMNV3CyyLRiXJYnydjHroYlNrn8wzz3oiZC5lM4F8CJTg9PQ96PDe7NSeWsajtsLV79MOuljcVGmjGBudhcfWF002ROxEnfxXr1RjijhWh5DvaAFCDGp0xTfx&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqbWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtlKStsd2HtcUfpOyXGEuTRJ0l36AOB2NbcbApj7bI5uVKDQC31MOkzNwPnm7jZeIhKV5SM%25vqCtkyLRzcHYax7aYrH1KCRn8wvzboiZL6NM4FamrTg9HhT6PDBcpSeWAXStsd5ZQcUfCF6XGEzJSJ0l7OZOB2XrmbApJAVI5u84zQC3igwkzN4U9m7jgOFhKVBSQ%25vqAv9yLR5ORYaxCNqrH1zntn8w7oboiZKeXM4FvswTg9wtn6PDGkNSeW0h%25tXSMNV3CyyLRiXJYnydjHroYlNrn8wzz3oiZC5lM4F8CJTg9PQ96PDe7NSeWsajtsLV79MOuljcVGmjGBudhcfWF002ROxEnfxXr1RjijhWh5DvaAFCDGp0xTfx&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300 ",
  },
  {
    name: "Mercedes-Maybach S-Class",
    price: 8199000000,
    isElectric: false,
    brand: "Mercedes",

    isMayBach: true,
    type: "Sedan",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqbSeqtyO67PobzIr3eWsrrCsdRRzwQZhkHZbMw3SGtGyMtsd2vtcUfpLfXGEuiXJ0l34AOB2NQnbApjtwI5uVczQC3qkOkzNRLkm7jxafhKVFSQ%25vq9tayLRDcVYaxWaqrH1dBtn8wfAyoiZLbXM4FaIrTg9HQe6PD8P6SeWiaMtsd4HDcUfg8yXGEPbXJ0leIZOB2sQnbApUTyI5uG6JQC30SQkzNHTnm7j8yZhKViYh%25vq4uTyLRg3mYaxPrhrH1enun8wY8WoiZrMlM4FAIcTg95zp6PDCLNSeWzn3tsd8hTcUfiUkXGE4bjJ0lgolOB2PWEbApetpI5usc2QC3UkrkzNGmbm7j0hShKVBHM%25vqA8jyLRjcHYaxVXprH1qM%25n8wPO2oiZeIQM6oY2ul0kkzNL6Sm%25kFpKhymWBM%25vqBBjyLR0GWYaxv0SrH1LIrn8wiO3oiZ4iZM4FgCuTg9Pv36PKNCZnX2f3SNsQ3BxNDkSW9wUUEVXqdYWqtyRV3H3k9kBF7v0wAFslUqoWq&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqbSeqtyO67PobzIr3eWsrrCsdRRzwQZhkHZbMw3SGtGyMtsd2vtcUfpLfXGEuiXJ0l34AOB2NQnbApjtwI5uVczQC3qkOkzNRLkm7jxafhKVFSQ%25vq9tayLRDcVYaxWaqrH1dBtn8wfAyoiZLbXM4FaIrTg9HQe6PD8P6SeWiaMtsd4HDcUfg8yXGEPbXJ0leIZOB2sQnbApUTyI5uG6JQC30SQkzNHTnm7j8yZhKViYh%25vq4uTyLRg3mYaxPrhrH1enun8wY8WoiZrMlM4FAIcTg95zp6PDCLNSeWzn3tsd8hTcUfiUkXGE4bjJ0lgolOB2PWEbApetpI5usc2QC3UkrkzNGmbm7j0hShKVBHM%25vqA8jyLRjcHYaxVXprH1qM%25n8wPO2oiZeIQM6oY2ul0kkzNL6Sm%25kFpKhymWBM%25vqBBjyLR0GWYaxv0SrH1LIrn8wiO3oiZ4iZM4FgCuTg9Pv36PKNCZnX2f3SNsQ3BxNDkSW9wUUEVXqdYWqtyRV3H3k9kBF7v0wAFslUqoWq&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "Vinfax Lux A2.0",
    price: 700000000,
    brand: "Vinfast",
    isElectric: false,
    type: "Sedan",
    imgUrl: vf2,
    imgUrl1: vf1,
  },
];

export const suvData = [
  {
    name: "EQB",
    price: 2289000000,
    isElectric: true,
    brand: "Mercedes",
    type: "SUV",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtle9tsd2HVcUfpO6XGEuTRJ0lV0VOB2qg%25bApUTlI5uLoxQC3aCRkzNH%25um7j8yuhKVi%25M%25vqmtjyLRhAmYaxU0ErH1GCfn8w0hyoiZBJZM4FvIFTg9LtV6PDa%256SeWHyhtsd8oxcUfiXyXGE45jJ0ldItOB2fMqbAp7oMIkbX1ZxaTTg9Ukm6tTuweSc6jHItsdLYqcUfeOfXGEsbYJ0lw9YOB2A8cbAp5iCI5uCmZQC3zSTkzN7lbm7sDgubYwR9hDvd9u9wj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1LfIVf&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtle9tsd2HVcUfpO6XGEuTRJ0lV0VOB2qg%25bApUTlI5uLoxQC3aCRkzNH%25um7j8yuhKVi%25M%25vqmtjyLRhAmYaxU0ErH1GCfn8w0hyoiZBJZM4FvIFTg9LtV6PDa%256SeWHyhtsd8oxcUfiXyXGE45jJ0ldItOB2fMqbAp7oMIkbX1ZxaTTg9Ukm6tTuweSc6jHItsdLYqcUfeOfXGEsbYJ0lw9YOB2A8cbAp5iCI5uCmZQC3zSTkzN7lbm7sDgubYwR9hDvd9u9wj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1LfIVf&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "EQE SUV",
    price: 3999000000,
    isElectric: true,
    brand: "Mercedes",
    type: "SUV",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0WdqtyO67PobzIr3eWsrrCsdRRzwQZ69RZbMw3SGtlaStsd2JQcUfpOcXGEunSJ0l36xOB2qBEbApUnyI5uG5IQC30h3kzNBlNm7j86ohKViKw%25vq4yTyLRgX6YaxPtxrH1yBRn8wYVcoiZB5oM4FAC2Tg9LQ96PDaPpSeWHXutsd8ZDcUfiMWXGE4JYJ0lgCVOB2Pz%25bApe79I5ulf%25QC3vSrkzNL6Sm%25kbFDZittsdB%25ycJtj9GXOcR4mJ0l4YfOB2igSbAp0iyI5uC5JQC3zgFkze94pOy1qFm9Kh5pQ2NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0WdqtyO67PobzIr3eWsrrCsdRRzwQZ69RZbMw3SGtlaStsd2JQcUfpOcXGEunSJ0l36xOB2qBEbApUnyI5uG5IQC30h3kzNBlNm7j86ohKViKw%25vq4yTyLRgX6YaxPtxrH1yBRn8wYVcoiZB5oM4FAC2Tg9LQ96PDaPpSeWHXutsd8ZDcUfiMWXGE4JYJ0lgCVOB2Pz%25bApe79I5ulf%25QC3vSrkzNL6Sm%25kbFDZittsdB%25ycJtj9GXOcR4mJ0l4YfOB2igSbAp0iyI5uC5JQC3zgFkze94pOy1qFm9Kh5pQ2NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "EQS SUV",
    price: 4999000000,
    isElectric: true,
    brand: "Mercedes",
    type: "SUV",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyStsd2HtcUfpr6XGEu5XJ0lVYrOB2qznbApUnyI5uG5IQC30s7kzNHTnm7j871hKVi0W%25vq4ulyLRgY6YaxPrhrH1eOtn8wsXwoiZB5oM4FAyrTg956O6PDCIoSeWHmStsd8s3cUfiONXGE4bBJ0lgIZOB2PM2bApetlI5usQMQC3Uv1kzNLtnm7jaSthymI9WF4ccUfAyYXOcVD0JbXxghOB2g8qbAp4TZI5uB4YQC3AgTkzN5S1m7jd88hKVvsL%25vGdeNQnF1WydaY%25NYeqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHlkRl&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyStsd2HtcUfpr6XGEu5XJ0lVYrOB2qznbApUnyI5uG5IQC30s7kzNHTnm7j871hKVi0W%25vq4ulyLRgY6YaxPrhrH1eOtn8wsXwoiZB5oM4FAyrTg956O6PDCIoSeWHmStsd8s3cUfiONXGE4bBJ0lgIZOB2PM2bApetlI5usQMQC3Uv1kzNLtnm7jaSthymI9WF4ccUfAyYXOcVD0JbXxghOB2g8qbAp4TZI5uB4YQC3AgTkzN5S1m7jd88hKVvsL%25vGdeNQnF1WydaY%25NYeqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHlkRl&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "GLA",
    price: 3430000000,
    isElectric: false,
    brand: "Mercedes",
    type: "SUV",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNpFqtyO67PobzIr3eWsrrCsdRRzwQZxe4ZbMw3SGtGyMtsd2sDcUfp8qXGEubSJ0l3IrOB2NS1bApRARI5uxeMQC30CQkzNBPKm7jAyvhKV5XN%25vqCJcyLRgcDYaxPa9rH1eMOn8wsV3oiZUMXM4FnCwTg9otn6PDC7NSeWza3tsd7oTcUfKmfXGE4ySJ0lg0VOB2PQqbApeToI5uscDQC3UkTkzNGLwm7j0afhKVHKh%25vq8JcyLRiXJYnymdEWeOOB2znobQOxf5IkbZsYQC3sEOkzNelfm7jCyShKVfi5%25vqLUkyLRaGHYaxHoErH18IOn8wiVyoiZ4%25EM4FgTwTg735wrcldu63ejznj59Q6DF1ssfjcVWyDVS%25qjuauQFQ0ZzKG1BZeEsVnDV&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNpFqtyO67PobzIr3eWsrrCsdRRzwQZxe4ZbMw3SGtGyMtsd2sDcUfp8qXGEubSJ0l3IrOB2NS1bApRARI5uxeMQC30CQkzNBPKm7jAyvhKV5XN%25vqCJcyLRgcDYaxPa9rH1eMOn8wsV3oiZUMXM4FnCwTg9otn6PDC7NSeWza3tsd7oTcUfKmfXGE4ySJ0lg0VOB2PQqbApeToI5uscDQC3UkTkzNGLwm7j0afhKVHKh%25vq8JcyLRiXJYnymdEWeOOB2znobQOxf5IkbZsYQC3sEOkzNelfm7jCyShKVfi5%25vqLUkyLRaGHYaxHoErH18IOn8wiVyoiZ4%25EM4FgTwTg735wrcldu63ejznj59Q6DF1ssfjcVWyDVS%25qjuauQFQ0ZzKG1BZeEsVnDV&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "GLB",
    price: 2089000000,
    isElectric: false,
    brand: "Mercedes",
    type: "SUV",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtle9tsd2HVcUfpO6XGEubYJ0l36xOB2qBqbApUioI5uGmzQC30SpkzNHTwm7j871hKViYN%25vq4yTyLRhAmYaxU0ErH1GCfn8w0hyoiZBJZM4FvIlTg9LtV6PDa%25mSeWHnRtsd8B3cUfDrNXGE5nYJ0lCrnOIJtR1qvooiZeIQM6o2xgTSM3Ln6PDL1oSeWvyVtsdPJ%25cUfxZ%25XGE0aSJ0lBHAOB2AMnbAp5dXI5gZ8lXhRjwQZz94luCuoQ3pE77V9hDNt3DkSW9wUwopoL24PvEa2zq7DJ3D&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtle9tsd2HVcUfpO6XGEubYJ0l36xOB2qBqbApUioI5uGmzQC30SpkzNHTwm7j871hKViYN%25vq4yTyLRhAmYaxU0ErH1GCfn8w0hyoiZBJZM4FvIlTg9LtV6PDa%25mSeWHnRtsd8B3cUfDrNXGE5nYJ0lCrnOIJtR1qvooiZeIQM6o2xgTSM3Ln6PDL1oSeWvyVtsdPJ%25cUfxZ%25XGE0aSJ0lBHAOB2AMnbAp5dXI5gZ8lXhRjwQZz94luCuoQ3pE77V9hDNt3DkSW9wUwopoL24PvEa2zq7DJ3D&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "GLC",
    price: 2299000000,
    isElectric: false,
    brand: "Mercedes",
    type: "SUV",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0hFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9nh39Q6FjcBXwOuXGEZn3J0lFDNOB29SjbApjAlI5uVeZQC3qhOkzNR%256m7jxOZhKV1bW%25vqw8qyLRZS6YaxWXSrH1dJOn8wfOFoiZE6pM4Fa4MTg9HzO6PD87FSeWiXutsd4Y%25cUfgM1XGEzyjJ0l70NOB2K8cbApvIRI5uO5YQC3bhOkzN4Pkm7jgeDhKVPbQ%25vqAt9yLR5LDYaxCaqrH1zMdn8w7T4oiZK%25oM4FvyPTg9LYV6PDaSmSeWH0Stsd8kGcUfD%25NXGE5nYJ0lCrnOIJtR1qvooiZeIQM6o2xgTSMsQO6PDLLbSeWvantsdPvTcUfe8kXGEsbEJ0lUIrOB2ZDVbAp5noI5uC5JQC3zgOkze94pOy1qFm9KjFHN4NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0hFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9nh39Q6FjcBXwOuXGEZn3J0lFDNOB29SjbApjAlI5uVeZQC3qhOkzNR%256m7jxOZhKV1bW%25vqw8qyLRZS6YaxWXSrH1dJOn8wfOFoiZE6pM4Fa4MTg9HzO6PD87FSeWiXutsd4Y%25cUfgM1XGEzyjJ0l70NOB2K8cbApvIRI5uO5YQC3bhOkzN4Pkm7jgeDhKVPbQ%25vqAt9yLR5LDYaxCaqrH1zMdn8w7T4oiZK%25oM4FvyPTg9LYV6PDaSmSeWH0Stsd8kGcUfD%25NXGE5nYJ0lCrnOIJtR1qvooiZeIQM6o2xgTSMsQO6PDLLbSeWvantsdPvTcUfe8kXGEsbEJ0lUIrOB2ZDVbAp5noI5uC5JQC3zgOkze94pOy1qFm9KjFHN4NTmj32vvRWydVXjdhcfWF0FT3THuPsa28uKxvdbjd&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "GLC Coupé",
    price: 3129000000,
    isElectric: false,
    brand: "Mercedes",
    type: "SUV",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0JLqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyutsd2JTcUfpOyXGEuTRJ0lVYrOB2qrubApUkCI5uGfuQC3aMrkzNITum7jQGIhKVkHF%25vqeIkyLR5cDYaxCo8rH1zIOn8w7h4oiZK%25NM4FvTQTg9LU26PDaG6SeWFmutsdB%25ycJtTjqNzYYax4JOroYfV8nMrgOcoiZ77XM4Fzm3Tg9izk6PD4LbSeWgXhtsdRwucUfG%25yXGE0JSJ08xLdSQjuROxA2RPlLlYO2EW553wQZpT2ZbMFwRPRYEY7fHizWKfAN5Zt2Z&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0JLqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyutsd2JTcUfpOyXGEuTRJ0lVYrOB2qrubApUkCI5uGfuQC3aMrkzNITum7jQGIhKVkHF%25vqeIkyLR5cDYaxCo8rH1zIOn8w7h4oiZK%25NM4FvTQTg9LU26PDaG6SeWFmutsdB%25ycJtTjqNzYYax4JOroYfV8nMrgOcoiZ77XM4Fzm3Tg9izk6PD4LbSeWgXhtsdRwucUfG%25yXGE0JSJ08xLdSQjuROxA2RPlLlYO2EW553wQZpT2ZbMFwRPRYEY7fHizWKfAN5Zt2Z&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "GLE",
    price: 4669000000,
    isElectric: false,
    brand: "Mercedes",
    type: "SUV",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9eW39Q6FjcBXBrNXGEZb3J0l30fOB2Ng1bApjkXI5uVmMQC3qXFkzNRLNm7jZcDhKVFpW%25vqCUTyLRzQ2Yax7rSrH1Kgtn8wsOfoiZU6IM4FGRjTg90626PDBSqSeWTXMtsd7vtcUfKLjXGEvTSJ0lgYVOB2PBqbApekCI5usmDQC3UEpkzNGJnm7j0OvhKVB%25h%25vqAycyLR5iDYaxVXSrH1qHln8wPbIoTnylpEGQQC3vT6khQZ27m%25kL6ZhKV00M%25vqGBDyLRKL2Yaxv0hrH1LCtn8waTboiZHqZM4FNIJTg9jxe6PDVscSeWsmhtsdUs3cUfGU6XGE0aSJ08xLdSQjuROx84HAwxlYO2EW553wQZpT2ZbMFwRPRYEY7fHizWKfAN5Zt2Z&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9eW39Q6FjcBXBrNXGEZb3J0l30fOB2Ng1bApjkXI5uVmMQC3qXFkzNRLNm7jZcDhKVFpW%25vqCUTyLRzQ2Yax7rSrH1Kgtn8wsOfoiZU6IM4FGRjTg90626PDBSqSeWTXMtsd7vtcUfKLjXGEvTSJ0lgYVOB2PBqbApekCI5usmDQC3UEpkzNGJnm7j0OvhKVB%25h%25vqAycyLR5iDYaxVXSrH1qHln8wPbIoTnylpEGQQC3vT6khQZ27m%25kL6ZhKV00M%25vqGBDyLRKL2Yaxv0hrH1LCtn8waTboiZHqZM4FNIJTg9jxe6PDVscSeWsmhtsdUs3cUfGU6XGE0aSJ08xLdSQjuROx84HAwxlYO2EW553wQZpT2ZbMFwRPRYEY7fHizWKfAN5Zt2Z&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "GLE Coupé",
    price: 4849000000,
    isElectric: false,
    brand: "Mercedes",
    type: "SUV",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrEFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyItsd2HVcUfpO6XGEubYJ0l36xOB2sr%25bApUAbI5uGQMQC3aM1kzNHTnm7j8hohKVi%25E%25vqmUjyLRhnmYaxU0drH1Gm%25n8w7OcoiZKiEM4FvSlTg9Lte6PDarsSeWHthtsd8B3cUfD%25kXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIlTg9vx96PDK1RSeWgeRtsdPvQcUfeFfXGE1zrJ0lBYrOB2A85bAp5tlI5uCQ2QCPFi2J%25xVZkFPsgGvx3MkNulKKqD%25WjcNWmtdDZGZMuMapgeLlHp7RKWONW&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrEFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtGyItsd2HVcUfpO6XGEubYJ0l36xOB2sr%25bApUAbI5uGQMQC3aM1kzNHTnm7j8hohKVi%25E%25vqmUjyLRhnmYaxU0drH1Gm%25n8w7OcoiZKiEM4FvSlTg9Lte6PDarsSeWHthtsd8B3cUfD%25kXGE5YrJbXSqxVKnn8wPbIoTnlR4M6oeIlTg9vx96PDK1RSeWgeRtsdPvQcUfeFfXGE1zrJ0lBYrOB2A85bAp5tlI5uCQ2QCPFi2J%25xVZkFPsgGvx3MkNulKKqD%25WjcNWmtdDZGZMuMapgeLlHp7RKWONW&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "GLS",
    price: 5389000000,
    isElectric: false,
    brand: "Mercedes",
    type: "SUV",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlKUtsd2JTcUfpMqXGEu5wJ0le0JOB2sbnbApvnyI5uLmIQC3akrkzNHmbm7j8hfhKVksN%25vqmrkyLRsGyYaxUkhrH1zJtn8w78foiZK6pM4FvSPTg9Lxe6PDarsSeWHthtsd8B3cUfiA1XGEWymJ0lCrnOIJtR1qvooiZeIQM6o2xgTSM3LO6PDLLbSeWva%25tsdPsxcUfeL6XGEsimJ0lUDlOB2ZKrbAp5noI5uC4zQCPFi2J%25xVZkFPsgaDF3MkNulKKqD%25WjcNWmtdDZGZMuMapgeLlHp7RKWONW&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlKUtsd2JTcUfpMqXGEu5wJ0le0JOB2sbnbApvnyI5uLmIQC3akrkzNHmbm7j8hfhKVksN%25vqmrkyLRsGyYaxUkhrH1zJtn8w78foiZK6pM4FvSPTg9Lxe6PDarsSeWHthtsd8B3cUfiA1XGEWymJ0lCrnOIJtR1qvooiZeIQM6o2xgTSM3LO6PDLLbSeWva%25tsdPsxcUfeL6XGEsimJ0lUDlOB2ZKrbAp5noI5uC4zQCPFi2J%25xVZkFPsgaDF3MkNulKKqD%25WjcNWmtdDZGZMuMapgeLlHp7RKWONW&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "G-Class",
    price: 11750000000,
    isElectric: false,
    brand: "Mercedes",
    type: "SUV",
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZUZpZbMw3SGtGyMtsdAv3cUf5rcXGE5YrJbXSqxVKnn8wPbIoTnlR4M6ouvrTg9U1n6PDAGoSeWf%25MtsdE1tcUflwfXGE2hEJ0lp%25fOB2u5EbAp3CoI5uE5ZQC3lXFkzN25bm7jpv3hKV0cM%25vqrUdyLRnb6YaxoTWrH1MVtn8wBocoiZCkNM4FzRRTg9itZ6PD4%25DSeWgnRtsdPyDcUfeT6XGEsFmJ0lh4VOB2ZnnbApFrpI5ubvxQC3IAOkzN7mum7jDcfhKVjbQ%25vqYUTyLR3tmYaBEUVmMDZfrEQ5fA3JxXr1RjiiF2MpwQ1pnIu2fzfXRXPq0Agjeq89iph1p&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqrWFqtyO67PobzIr3eWsrrCsdRRzwQZUZpZbMw3SGtGyMtsdAv3cUf5rcXGE5YrJbXSqxVKnn8wPbIoTnlR4M6ouvrTg9U1n6PDAGoSeWf%25MtsdE1tcUflwfXGE2hEJ0lp%25fOB2u5EbAp3CoI5uE5ZQC3lXFkzN25bm7jpv3hKV0cM%25vqrUdyLRnb6YaxoTWrH1MVtn8wBocoiZCkNM4FzRRTg9itZ6PD4%25DSeWgnRtsdPyDcUfeT6XGEsFmJ0lh4VOB2ZnnbApFrpI5ubvxQC3IAOkzN7mum7jDcfhKVjbQ%25vqYUTyLR3tmYaBEUVmMDZfrEQ5fA3JxXr1RjiiF2MpwQ1pnIu2fzfXRXPq0Agjeq89iph1p&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "Mercedes-Maybach GLS",
    price: 8799000000,
    isElectric: false,
    brand: "Mercedes",
    type: "SUV",
    isMayBach: true,
    imgUrl:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq4EFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlKWtsd2HtcUfp8qXGEui2J0l3ItOB2NQnbApjtwI5uVKDQC31MrkzNwTdm7jZ63hKVFKM%25vq98cyLRzc6Yax7XhrH1KHrn8wvz4oiZL6NM4FaSQTg9Hhn6PD8%256SeWiwStsd4c%25cUfgANXGEzyjJ0l7YhOB2KQObApvIyI5uLQJQC3akWkzNIPum7jQyIhKVP0W%25vqeJZyLR5c6YaxCaSrH1zMdn8w7VwoiZKqgM4FvyFTg9LYe6PDaSmSeWH0utsd8BxcUfiAWXGEWymJ0ldYtOB2frObAp7ACI5uKMTQmIJwF1H66PDGmhSc63ZstXS0hQcUf88fXGEHirJ0lU0ZOB2G8%25bAp0dpI5u9fZQC3zMrkzN7zNm7jKG3hKVvpM%25vGdeNQnF1WydGBU4qLqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHlkRl&imgt=P27&bkgnd=9&pov=BE040&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=300",
    imgUrl1:
      "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq4EFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtlKWtsd2HtcUfp8qXGEui2J0l3ItOB2NQnbApjtwI5uVKDQC31MrkzNwTdm7jZ63hKVFKM%25vq98cyLRzc6Yax7XhrH1KHrn8wvz4oiZL6NM4FaSQTg9Hhn6PD8%256SeWiwStsd4c%25cUfgANXGEzyjJ0l7YhOB2KQObApvIyI5uLQJQC3akWkzNIPum7jQyIhKVP0W%25vqeJZyLR5c6YaxCaSrH1zMdn8w7VwoiZKqgM4FvyFTg9LYe6PDaSmSeWH0utsd8BxcUfiAWXGEWymJ0ldYtOB2frObAp7ACI5uKMTQmIJwF1H66PDGmhSc63ZstXS0hQcUf88fXGEHirJ0lU0ZOB2G8%25bAp0dpI5u9fZQC3zMrkzN7zNm7jKG3hKVvpM%25vGdeNQnF1WydGBU4qLqtyRV3HHwEnlxbRlYO2EW5WtVt4jU0i3gjaZHlkRl&imgt=P27&bkgnd=9&pov=BE090&uni=cs&im=Crop,rect=(0,0,1550,650),gravity=Center;Resize,width=300",
  },
  {
    name: "Vinfast Lux SA2.0",
    price: 700000000,
    isElectric: false,
    brand: "Vinfast",
    type: "SUV",
    imgUrl: vfs1,
    imgUrl1: vfs2,
  },
];
