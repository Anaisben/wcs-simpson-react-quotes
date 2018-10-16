import  React  from  'react';

const  GenerateEmployee = ({ selectEmployee }) => {
    constructor = (props) => {

        this.state = {
          employee:  sampleEmployee
        };
      }

      const  sampleEmployee = {
        gender:  'male',
        name: {
            title:  'mr',
            first:  'mathys',
            last:  'aubert'
        },
        location: {
            street:  '9467 rue gasparin',
            city:  'perpignan',
            postcode:  '90208'
        },
        email:  'mathys.aubert@example.com',
        picture: {
            medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
        }
    };
      
    fetch('http://my-api.com/1')
    .then(results  =>  results.json()) // conversion du résultat en JSON
    .then(data  => {
        console.log(data.name); // affiche "John Smith"
});

    return (
        <div  className="GenerateEmployee">
        <button  onClick={selectEmployee}>Get employee</button>
        </div>
    );
};

export  default  GenerateEmployee;