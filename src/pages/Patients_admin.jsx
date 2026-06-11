import React from "react";
import patients from "@/data/patients.json";
import Table from '../components/admin/Table';
export default function Patients() {

    return (
        <div>
            <Table
                data={patients}
            />
        </div>
    );
}