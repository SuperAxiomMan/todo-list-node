/* eslint-disable no-console */
import { connect } from 'mongoose';

class DBConnector {
    static async initDB() {
        try {
            return await connect(process.env.DB_URI || '', {
                useCreateIndex: true,
                useFindAndModify: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}

//=|*Exports*|=//=>server.ts
export { DBConnector };
