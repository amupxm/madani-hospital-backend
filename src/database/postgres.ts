import createConnectionPool, { sql } from '@databases/pg';
import tables from '@databases/pg-typed';
import DatabaseSchema, { serializeValue } from '../__generated__';

export { sql };
const db = createConnectionPool(process.env.POSTGRES_URL);
export default db;

const { patient, healthpromotion, nutrition } = tables<DatabaseSchema>({
	serializeValue,
});
export { patient, healthpromotion, nutrition };
