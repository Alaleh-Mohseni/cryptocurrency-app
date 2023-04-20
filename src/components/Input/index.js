import './style.css'

function Input(props) {
    // let inputElement = null

    // switch (props.inputType) {
    //     case 'input': (
    //         inputElement =
    //         <input
    //             className='input-element'
    //             {...props}
    //             onChange={props.change}
    //         />
    //     )
    //         break
    //     default: (
    //         inputElement =
    //         <input
    //             className='input-element'
    //             {...props}
    //             onChange={props.change}
    //         />
    //     )
    // }

    // return (
    //     <div className='Input'>
    //         {inputElement}
    //     </div>
    // )

    return (
        <input
            className='input-element'
            {...props}
            onChange={props.onChange}
        />
    )
}

export default Input