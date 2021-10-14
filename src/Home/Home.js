import React from "react";
import useStyles from './style';
import Product from "./Product";
import productList from "./productList";

export default function Home() {

    const classes = useStyles();


    return (
        <div className={classes.content}>
            <div>

                <div className={classes.row}>
                    <Product
                        id={productList[0].id}
                        title={productList[0].name}
                        price={productList[0].price}
                        image={productList[0].image}
                    />
                    <Product
                        id={productList[1].id}
                        title={productList[1].name}
                        price={productList[1].price}
                        image={productList[1].image}
                    />
                    <Product
                        id={productList[2].id}
                        title={productList[2].name}
                        price={productList[2].price}
                        image={productList[2].image}
                    />
                </div>

                <div className={classes.row}>
                    <Product
                        id={productList[3].id}
                        title={productList[3].name}
                        price={productList[3].price}
                        image={productList[3].image}
                    />
                    <Product
                        id={productList[4].id}
                        title={productList[4].name}
                        price={productList[4].price}
                        image={productList[4].image}
                    />
                    <Product
                        id={productList[5].id}
                        title={productList[5].name}
                        price={productList[5].price}
                        image={productList[5].image}
                    />
                </div>

                <div className={classes.row}>
                    <Product
                        id={productList[6].id}
                        title={productList[6].name}
                        price={productList[6].price}
                        image={productList[6].image}
                    />
                    <Product
                        id={productList[7].id}
                        title={productList[7].name}
                        price={productList[7].price}
                        image={productList[7].image}
                    />
                    <Product
                        id={productList[8].id}
                        title={productList[8].name}
                        price={productList[8].price}
                        image={productList[8].image}
                    />
                </div>

                <div className={classes.row}>
                    <Product
                        id={productList[9].id}
                        title={productList[9].name}
                        price={productList[9].price}
                        image={productList[9].image}
                    />
                    <Product
                        id={productList[10].id}
                        title={productList[10].name}
                        price={productList[10].price}
                        image={productList[10].image}
                    />
                    <Product
                        id={productList[11].id}
                        title={productList[11].name}
                        price={productList[11].price}
                        image={productList[11].image}
                    />
                </div>

            </div>

        </div>
    );
}
