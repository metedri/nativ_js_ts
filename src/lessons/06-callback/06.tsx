import {ChangeEvent, MouseEvent} from 'react'

export const User = () => {

    const onClickUserHandler = (event: MouseEvent<HTMLButtonElement>) => {
        
        alert(event.currentTarget.name)
    }

    const onNameChanged = () => alert('name changed')

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => console.log('age changed: ' + event.currentTarget.value)

    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={() => alert('фокус потерян')}>Dimych</textarea>
            <input onChange={onAgeChanged} type='number'/>
            <button name='delete' onClick={onClickUserHandler}>delete</button>
            <button name='save' onClick={onClickUserHandler}>save</button>
        </div>
    )
}