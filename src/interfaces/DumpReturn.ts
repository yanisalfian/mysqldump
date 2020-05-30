import { Table } from './Table';

interface DumpReturn {
    /**
     * The result of the dump
     */
    dump: {
        /**
         * The concatenated SQL schema dump for the entire database.
         * Null if configured not to dump.
         */
        schema: string | null;
        /**
         * The concatenated SQL data dump for the entire database.
         * Null if configured not to dump.
         */
        data: string | null;
        /**
         * The concatenated SQL trigger dump for the entire database.
         * Null if configured not to dump.
         */
        trigger: string | null;
        /**
         * The concatenated SQL procedure dump for the entire database.
         * Null if configured not to dump.
         */
        procedure: string | null;
        /**
         * The concatenated SQL function dump for the entire database.
         * Null if configured not to dump.
         */
        function: string | null;
    };
    tables: Array<Table>;
}

export { DumpReturn };
