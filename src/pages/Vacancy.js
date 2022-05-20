import React, { useEffect, useState  } from 'react'
import { Modal, CloseButton } from "react-bootstrap"

const Vacancy = () => {
    const [roll, setRoll] = useState(false)
    const [response, setResponse] = useState(false)

    useEffect(() => {
        document.title = "Наши вакансии"
    }, [])
    return (
        <>
        <main className='pt-4 pt-lg-5'>
            <section id="sec-9" className="container mb-5">
                <h1 className='inner'>Наши вакансии</h1>
                <ul className="simple-list list-unstyled">
                    <li className="vacancy">
                        <div className={(roll) ? "roll-box full" : "roll-box"} >
                            <div className="d-md-flex justify-content-between align-items-center mb-4 mb-md-5">
                                <div>
                                    <div className="fs-14 mb-4">Шеф повар</div>
                                    <div className="mb-2">Требуемый опыт: более 6 лет</div>
                                    <div>Занятость: полный день</div>
                                </div>
                                <div className="text-md-end mt-3 mt-md-0">
                                    <div className="fs-12 mb-3 mb-md-4">По итогам собеседования</div>
                                    <button type="button" onClick={()=>setResponse(true)} className="btn btn-1 ms-md-auto">Откликнуться</button>
                                </div>
                            </div>
                            <div className="fw-6 mb-3">Обязанности:</div>
                            <ul className="default list-unstyled">
                                <li className="mb-2">Приготовление салатов, холодных закусок, сендвичей, гамбургеров, напитков;</li>
                                <li className="mb-2">Нарезка фруктовых десертов. Приготовление готовой кулинарии, основных блюд и гарниров;</li>
                                <li className="mb-2">Разделка мяса, кур и рыбы;</li>
                                <li className="mb-2">Приёмка и контроль качества сырья, контроль сроков годности.</li>
                            </ul>
                            <div className="fw-6 mb-3 mt-4">Требования:</div>
                            <ul className="default list-unstyled">
                                <li className="mb-2">Общительность</li>
                                <li className="mb-2">Внимательность</li>
                            </ul>
                            <div className="fw-6 mb-3 mt-4">Условия:</div>
                            <ul className="default list-unstyled">
                                <li className="mb-2">График работы: 5/2; 2/2 и другие;</li>
                                <li className="mb-2">Ежемесячные премии-надбавки;</li>
                                <li className="mb-2">Белая заработная плата, выплата 2 раза в месяц</li>
                            </ul>
                        </div>
                        <button type="button" onClick={() => setRoll((roll) ? false : true)} className="bb-solid mt-3 mt-md-4">
                            {
                                (roll)?
                                'Свернуть'
                                : 'Развернуть'
                            }
                        </button>
                    </li>
                </ul>
            </section>
        </main>

        <Modal size="lg" show={response} onHide={()=>setResponse(false)}>
            <Modal.Body>
                <form>
                    <h3>Отправить анкету</h3>
                    <p className='fs-12 mb-4'>Заполните анкету, чтобы присоединиться к нашей команде!</p>
                    <div className='row g-3'>
                        <div className='col-12'>
                            <input type='text' placeholder='Фамилия'/>
                        </div>
                        <div className='col-md-6'>
                            <input type='text' placeholder='Имя'/>
                        </div>
                        <div className='col-md-6'>
                            <input type='text' placeholder='Отчество'/>
                        </div>
                        <div className='col-md-6'>
                            <input type='tel' placeholder='Номер телефона'/>
                        </div>
                        <div className='col-md-6'>
                            <input type='date'/>
                        </div>
                        <div className='col-12'>
                            <textarea rows='3' placeholder='Комментарий'></textarea>
                        </div>
                    </div>
                    <input type="file" className='form-control black mt-3'/>
                    <button type="submit" className='btn btn-1 fs-12 mt-4'>Отправить</button>
                </form>
            </Modal.Body>
            <CloseButton aria-label="Hide" onClick={()=>setResponse(false)} className="position-absolute top-1 right-1"/>
        </Modal>
        </>
    );
};

export default Vacancy;
