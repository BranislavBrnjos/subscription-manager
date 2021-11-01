import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button';
import { isEmpty } from 'lodash-es';
import { useHistory } from 'react-router';
import { EDIT_SUBSCRIPTION, SUBSCRIPTION_DETAILS } from '../assets/constants/pages';
import useDeleteSubscription from '../assets/hooks/useDeleteSubscription';
import PageLoader from './PageLoader';
import Pagination from './Pagination';

const tableHeader = ['Name', 'Price', 'Frequency'];

const SubscriptionsTable = ({tableData}) => {
    const history = useHistory();
    const deleteSubscription = useDeleteSubscription();
    const [pageNumber, setPageNumber] = useState(1);
    const [paginatedData, setPaginatedData] = useState([]);
    const [elementsToDelete, setElementsToDelete] = useState([]);
    
    const isNextButtonDisabled = pageNumber === Math.ceil(tableData.length / 10);
    const isPreviousButtonDisabled = pageNumber === 1;

    const isSelectedForDelete = (elements, element) => {
        if(elements.includes(element)) {
            return true;
        }
    }

    const markElementForDelete = (id) => {
        if(elementsToDelete.includes(id)) {
            const result = elementsToDelete.filter((element) => element !== id);
                setElementsToDelete(result);
        } else {
                setElementsToDelete([...elementsToDelete, id]);
        }
    }

    const editElement = (id) =>  history.push({ pathname: EDIT_SUBSCRIPTION, search: `?id=${id}`});

    const deleteMultiple = (elements) => {
        elements.forEach((element) => { deleteSubscription.mutate(element)});
        setElementsToDelete([]);   
    };

    const onPreviousButtonClick = () => {
        setPageNumber(pageNumber - 1);
    }

    const onNextButtonClick = () => {
        setPageNumber(pageNumber + 1);
    }

    useEffect(() => {
        if(isEmpty(tableData)) {
            return null;
        }

        const paginatedData = tableData.slice((pageNumber - 1) * 10, pageNumber * 10);
        
        if(!isEmpty(paginatedData)) {
            setPaginatedData(paginatedData);
        }

    }, [tableData, pageNumber]);

    useEffect(() => {
        if(pageNumber > Math.ceil(tableData.length / 10)) {
            onPreviousButtonClick();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableData.length])


    if(isEmpty(tableData) || isEmpty(paginatedData)) {
        return <h1 className="c-empty">You have no subscriptions.</h1>;
    }

    return (
        <div className="c-subscriptions-table-container">
        <table className="c-subscriptions-table">
            <thead>
                <tr>
                    {tableHeader.map((data) => <th key={data}>{data.toUpperCase()}</th> )}
                </tr>
            </thead>
            <tbody>
            {
                paginatedData && paginatedData.map((item) => {
                    const isElementSelectedForDelete = isSelectedForDelete(elementsToDelete, item.id);
                    return (
                        <tr className={`${isElementSelectedForDelete ? 'c-subscription-table__item-selected' : ''}`} key={item.id}>
                            <td>
                                <Button label={item.name} onClick={() => history.push({
                                    pathname: SUBSCRIPTION_DETAILS,
                                    search: `?id=${item.id}`
                                })} />
                            </td>
                            <td>
                                {item.price}
                            </td>
                            <td>
                                {item.frequency}
                            </td>
                            <td>
                                <Button label="Edit" onClick={() => editElement(item.id)} />
                            </td>
                            <td>
                                <Button label="Delete" onClick={() => {
                                    if(paginatedData.length === 1 && pageNumber !== 1) {
                                        onPreviousButtonClick();
                                    }
                                    deleteSubscription.mutate(item.id)
                                }}
                                />
                            </td>
                            <td>
                                <Button label={isElementSelectedForDelete ? 'Undo' : 'Mark for Delete'} onClick={() => {
                                    markElementForDelete(item.id)
                                }} />
                            </td>
                        </tr>
                    )
                }
            )}
            </tbody>
        </table>
        <div className="c-subscriptions-table__cta">
            <Pagination 
                isNextButtonDisabled={isNextButtonDisabled}
                isPreviousButtonDisabled={isPreviousButtonDisabled}
                onPreviousButtonClick={onPreviousButtonClick}
                onNextButtonClick={onNextButtonClick}
            />
            <Button className="c-subscriptions-table__delete-multiple" label="Delete Multiple" disabled={isEmpty(elementsToDelete)} onClick={() => deleteMultiple(elementsToDelete)}/>
        </div>
            <PageLoader isLoading={deleteSubscription.isLoading} />
        </div>
    )
}

SubscriptionsTable.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.shape({})),
}

export default SubscriptionsTable
