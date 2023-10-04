import {RegisterForm} from '../../component/organisms/registerForm'
export default async function Register() {
    // const n = await fetch('http://localhost/Personal/custom.js');
    // const x = ['test2']('1');
    // console.log(x);
    const stucture = {
        eventName : 'Barbie Run 2023',
        imageLogo : 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
        withHome : false,
        color : {
            primary : '#E01883',
            shadePrimary : '#AD1365',
            secondary : '#FFFFFF',
        }
      }
    
      const { color, eventName, imageLogo } = stucture;
    return(
        <div className='mx-auto max-w-6xl w-full px-3 sm:px-6 lg:px-8'>
            <RegisterForm />
        </div>
    )
}

const test2 = (input:string) => {
    return `test ${input} 2`;
}
