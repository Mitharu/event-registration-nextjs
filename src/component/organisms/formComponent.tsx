const regexPattern = /[^A-Za-z0-9]/g;
type TypeFormRegular = 'email' | 'text';
type ChangeFunction = () => void;
type ErrorState =  any;

interface AddtionalClassInput {
    parentClass? : string, 
    inputClass? : string, 
    labelClass? : string, 
}

interface FormInputRegular { 
    name : string, 
    state: StateProcess, 
    typeFormRegular : TypeFormRegular, 
    placeholder? : string,
    errorState? : ErrorState, 
    changeFunction? : ChangeFunction, 
    addionalClass? : AddtionalClassInput 
}

interface StateProcess {
    value : string,
    function? : ()=>void,
}

const defaultInputClass = 'color-[var(--cusFontLabel)] font-[family-name:var(--cusFontRegister)] shadow-md ring-1 ring-gray-300 placeholder:text-gray-400 focus:outline-0 focus:ring-[var(--cusPrimaryColor)] focus:ring-2 transition ease-in-out duration-15';

export function InputForm(props : FormInputRegular) {
    const { 
        name, 
        state, 
        typeFormRegular,
        errorState = false, 
        placeholder = '', 
        changeFunction = ()=>{}, 
        addionalClass = {
            parentClass : '',
            inputClass : '',
            labelClass : '',
        }
    } = props;
    const nameForm = name.replace(regexPattern, '');

    return (
        <div className={addionalClass.parentClass}>
            <label htmlFor={nameForm} className={`block color-[var(--cusFontLabel)] font-[family-name:var(--cusFontRegister)] ${addionalClass.labelClass}`}>
                {name}
            </label>
            <div className="mt-2">
                <input
                    type={typeFormRegular}
                    name={nameForm}
                    value={state.value}
                    placeholder={placeholder}
                    onChange={changeFunction}
                    autoComplete="given-name"
                    className={`block w-full rounded-md border-0 p-2 ${defaultInputClass} ${addionalClass.inputClass}`}
                />
            </div>
        </div>
    );
}

export function InputFormPassword(props : FormInputRegular) {
    const { 
        name, 
        state, 
        typeFormRegular,
        errorState = false, 
        placeholder = '', 
        changeFunction = ()=>{}, 
        addionalClass = {
            parentClass : '',
            inputClass : '',
            labelClass : '',
        }
    } = props;
    const nameForm = name.replace(regexPattern, '');

    // function setInput() {

    // }

    return (
        <div className={`sm:col-span-3 ${addionalClass.parentClass}`}>
            <label htmlFor={nameForm} className={`block color-[var(--cusFontLabel)] font-[family-name:var(--cusFontRegister)] ${addionalClass.labelClass}`}>
                {name}
            </label>
            <div className="mt-2">
                <input
                type={typeFormRegular}
                name={nameForm}
                value={state.value}
                placeholder={placeholder}
                onChange={changeFunction}
                autoComplete="given-name"
                className={`block w-full rounded-md border-0 p-2 ${defaultInputClass} ${addionalClass.inputClass}`}
                />
            </div>
        </div>
    );
}

export function InputDate() {
    return <input />
}

export function InputSelect() {
    return <input />
}

export function InputRadio() {
    return <input />
}