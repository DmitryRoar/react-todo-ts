import React, {useRef} from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('')
    
    // const changeHanlder = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
         if (event.key === 'Enter') {
             props.onAdd(ref.current!.value)
             ref.current!.value = ''
            //  setTitle('')
         }
    }

    return (
        <div className='input-field mt2'>
            <input 
            // value={title} 
            // onChange={changeHanlder} 
            ref={ref}
            type="text"
            id="title" 
            placeholder='Enter todo'
            onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className='active'>Enter todo</label>
        </div>
    )
}