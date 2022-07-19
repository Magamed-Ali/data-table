import React, {useEffect, useState} from 'react';
import Pagination from "../components/Pagination";
import Filtering from "../components/Filtering";

function Main(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cuntriesPerPage] = useState(15);

    const [column, setColumn] = useState();
    const [notation, setNotation] = useState();
    const [input, setInput] = useState()

    useEffect(() => {
        fetch('/container-line')
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }, [])

    const returnData = () => {
        fetch('/container-line')
            .then(response => response.json())
            .then(json => {
                setData(json);
            })
        setInput('')
    }

    const lastCountryIndex = currentPage * cuntriesPerPage
    const firstCountryIndex = lastCountryIndex - cuntriesPerPage
    const currentCountry = data.slice(firstCountryIndex, lastCountryIndex)

    const paginate = pageNumber => setCurrentPage(pageNumber)

    const result = data.filter(i => i.id > 15)

    const title = data.filter(i => i.title == input)

    const quantity = data.filter(i => {

            if (notation === '=') {
                return (
                    i.quantity == input
                )
            }
            if (notation === '>') {
                return (
                    i.quantity > input
                )
            }
            if (notation === '>=') {
                return (
                    i.quantity >= input
                )
            }
            if (notation === '<') {
                return (
                    i.quantity < input
                )
            }
            if (notation === '<=') {
                return (
                    i.quantity <= input
                )
            }
        })

    const distance = data.filter(i => {

        if (notation === '=') {
            return (
                i.distance == input
            )
        }
        if (notation === '>') {
            return (
                i.distance > input
            )
        }
        if (notation === '>=') {
            return (
                i.distance >= input
            )
        }
        if (notation === '<') {
            return (
                i.distance < input
            )
        }
        if (notation === '<=') {
            return (
                i.distance <= input
            )
        }
    })

    const getTitle = () => {
        if (column == "title") {
            setData(title)
        }
        if (column == "quantity") {
            setData(quantity)
        }
        if (column == "distance") {
            setData(distance)
        }
    }

    const getСolumn = (data) => {
        setColumn(data)
    }

    const getNotation = (data) => {
        setNotation(data)
    }

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <div className="content">
            <div className="filter">
                <Filtering
                    getСolumn={getСolumn}
                    getNotation={getNotation}
                />
                <div>
                    <h4>Введите поиск..</h4>
                    <input type="text" value={input} onChange={handleChange}/>
                </div>
                <div>
                    <button onClick={getTitle}>
                        найти
                    </button>
                    <button onClick={returnData}>
                        очистить
                    </button>
                    <div className="row-count">
                        <h4>Количество строк: <span>{data.length}</span></h4>
                    </div>
                </div>
            </div>

            <div className="main">
                <ul>
                    <li>
                        <div>Дата</div>
                        <div>Название</div>
                        <div>Количество</div>
                        <div>Расстояние</div>
                    </li>
                    {
                        currentCountry.map((todo) => {
                            return (
                                <li>
                                    <div>{todo.date}</div>
                                    <div>{todo.title}</div>
                                    <div>{todo.quantity}</div>
                                    <div>{todo.distance}</div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <Pagination
                        cuntriesPerPage={cuntriesPerPage}
                        totalCountries={data.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                </div>
            </div>
        </div>

    );
}

export default Main;