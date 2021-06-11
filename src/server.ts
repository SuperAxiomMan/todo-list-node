/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
//=|*Imports*|=//
import { config } from 'dotenv';
import { app } from './app.bootstrap';
import { DBConnector } from './app.database';

//=|*Env Variables*|=/
config({ path: 'variables.env' });


//=|*Output*|=//
const init = async () => {
    const db = await DBConnector.initDB();
    db
    ?app.listen(process.env.PORT, () => {console.log(`server is running on http://localhost:${process.env.PORT}`);})
    :console.log('Error on DB connection');

};

init();


