import React, {useEffect, useState} from 'react';

function Filtering(props) {
    const [select1, setSelect1] = useState('');
    const [select2, setSelect2] = useState('')

    const handleChange1 = (event) => {
        setSelect1(event.target.value)
    }
    const handleChange2 = (event) => {
        setSelect2(event.target.value)
    }

    useEffect(() => {
        props.getСolumn(select1)
        props.getNotation(select2)
    },[select1, select2])


    return (
        <div className="block-filter">
            <h3>Фильтрация данных</h3>
            <div>
                <select name="select" value={select1} onChange={handleChange1}>
                    <option value="" disabled>колонка таблицы</option>
                    <option value="title">Название</option>
                    <option value="quantity">Количество</option>
                    <option value="distance">Расстояние</option>
                </select>
            </div>

            <div>
                <select name="select" value={select2} onChange={handleChange2}>
                    <option value="" disabled>условие</option>
                    <option value="="><span>Равно</span><span> = </span></option>
                    <option value=">"><span>Больше</span><span> &#62; </span></option>
                    <option value=">="><span>Больше или равно </span><span>&#62;= </span></option>
                    <option value="<"><span>Меньше</span><span> &#60; </span></option>
                    <option value="<="><span>Меньше или равно </span><span>&#60;= </span></option>
                </select>
            </div>
        </div>
    );
}

export default Filtering;