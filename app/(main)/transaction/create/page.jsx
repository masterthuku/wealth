import { getUserAccounts } from '@/actions/dashboard';
import { defaultCategories } from '@/data/categories';
import React from 'react'
import AddTransactionForm from '../_components/AddTransactionForm';
import { getTransaction } from '@/actions/transaction';

const AddTrasactionPage = async ({searchParams}) => {
    const accounts = await getUserAccounts();

    const editId = searchParams?.edit;

    let initialData = null;
    if (editId) {
      const transaction = await getTransaction(editId);
      initialData = transaction
    }


  return (
    <div className='max-w-3xl mx-auto px-5'>
        <h1 className='text-5xl gradient-title mb-8 '>
           {editId ? "Edit Transaction" : "Add Transaction"}
        </h1>
        <AddTransactionForm accounts={accounts} categories={defaultCategories} initialData={initialData} editMode={!!editId} />
    </div>
  )
}

export default AddTrasactionPage