import React from 'react';
import { ScrollView, FlatList } from 'react-native';

import OrderCard from '../../component/OrderCard';

const orderDetails = [
    {
        id: 152,
        date: "August 1, 2019",
        status: "Shipping",
        items: 2,
        price: "Rs. 45,000"
    },
    {
        id: 2786,
        date: "August 2 2020",
        status: "Shipping",
        items: 5,
        price: "Rs. 82,505"
    },
    {
        id: 32236,
        date: "April 12, 2020",
        status: "Delivered",
        items: 6,
        price: "Rs. 1,14,360"
    },
    {
        id: 478745,
        date: "August 1, 2019",
        status: "Shipping",
        items: 2,
        price: "Rs. 45,000"
    },
]

const MyOrder = () => {
    return (


        <FlatList
            data={orderDetails}
            keyExtractor={orderDetails => orderDetails.id.toString()}
            renderItem={({ item }) => (
                <OrderCard
                    orderid={item.id}
                    date={item.date}
                    status={item.status}
                    items={item.items}
                    price={item.price}
                // shareUri={ }
                // downloadUri={ }
                />
            )}
        />
    );
};

export default MyOrder;