import Card from '@/components/Card'
import Table from '@/components/tables/Table'
import { columns } from '@/data/tableData'

const Document = () => {
  return (
    <div>
      <Card>
        <h3>Filter</h3>
      </Card>
      <Card>
        <Table columns={columns} />
      </Card>
    </div>
  )
}

export default Document
