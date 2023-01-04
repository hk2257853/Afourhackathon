/*
import * as React from 'react';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import products from './products.json';
const App = () => {
  const _grid = React.useRef();
  const _export = React.useRef(null);
  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save(products, _grid.current.columns);
    }
  };
  setInterval(() => {
      console.clear()
  }, 1000);
  return <div>
        <ExcelExport ref={_export} />
        <Grid style={{
      height: '420px'
    }} data={products} ref={_grid}>
          <GridToolbar>
            <button title="Export Excel" className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" onClick={excelExport}>
              Export to Excel
            </button>
          </GridToolbar>
          <GridColumn field="SkillID" title="ID" width="50px"/>
          <GridColumn field="Domain" title="Domain" width="100px" />
          <GridColumn field="SkillName" title="Skill Name" width="350px" />
          <GridColumn field="SkillLevel" title="Skill Level" />
          <GridColumn field="YearsOfExperience" title="Years Of Experience" />
        </Grid>
      </div>;
};

export default App;
*/
/*
import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';
// import { sampleProducts }from './products.json';
import { sampleProducts } from './sample-products';
import products from './products.json'
// const categories = Array.from(new Set(sampleProducts.map(p => p.Category ? p.Category.CategoryName : '')));
// const CategoryFilterCell = props => <DropdownFilterCell {...props} data={categories} defaultItem={'Select category'} style={{"backgroundColor":"black"}}/>;
const App = () => {

  const [data, setData] = React.useState(products);
  const [filter, setFilter] = React.useState();
  const filterChange = event => {
    setData(filterBy(products, event.filter));
    setFilter(event.filter);
  };
  setTimeout(() => {
    console.clear();
  }, 1000);
  return <Grid style={{
    height: '400px'
  }} data={data} filterable={true} filter={filter} onFilterChange={filterChange}>
        <Column field="SkillID" title="ID" filterable={false} />
        <Column field="Domain" title="Domain" />
        <Column field="SkillName" title="Skill Name" />
        <Column field="SkillLevel" title="Skill Level" />
        <Column field="YearsOfExperience" title="Years of Experience" />
      </Grid>;
};
export default App;
*/

import * as React from 'react';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import products from './products.json';
import { filterBy } from '@progress/kendo-data-query';
import axios from 'axios';

const App = () => {
  const [data, setData] = React.useState(products);
  const [filter, setFilter] = React.useState();

  React.useEffect(() => {
    axios.get('http://localhost:1300/mentor')
    .then((response) => {
      console.log(response.data);
      // setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
  const filterChange = event => {
    setData(filterBy(products, event.filter));
    setFilter(event.filter);
  };
  const _grid = React.useRef();
  const _export = React.useRef(null);
  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save(data, _grid.current.columns);
    }
  };
  setTimeout(() => {
    let buttons = document.querySelectorAll(".k-filtercell-operator");
    buttons.forEach((button) => {
      button.style.display = "none";
    })
  }, 10);
  setInterval(() => {
      // console.clear()
  }, 1000);
  return <div>
        <ExcelExport ref={_export} />
        <Grid style={{
    height: '400px'
  }} data={data} filterable={true} filter={filter} onFilterChange={filterChange} ref={_grid}>
          <GridToolbar>
            <button title="Export Excel" className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary" onClick={excelExport}>
              Export to Excel
            </button>
          </GridToolbar>
          <GridColumn field="SkillID" title="ID" filterable={false}/>
          <GridColumn field="Domain" title="Domain" />
          <GridColumn field="SkillName" title="Skill Name" />
          <GridColumn field="SkillLevel" title="Skill Level" />
          <GridColumn field="YearsOfExperience" title="Years Of Experience" />
        </Grid>
      </div>;
};

export default App;

