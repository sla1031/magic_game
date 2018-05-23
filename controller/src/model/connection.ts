import { createConnection, Connection, getConnection } from 'typeorm';

export async function getDefaultConnection(): Promise<Connection> {
  let connection: Connection;
  try {
    connection = await getConnection();
  } catch (err) {
    connection = await createConnection();
  }
  return connection;
}
