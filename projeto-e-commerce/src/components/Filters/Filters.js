import React from "react"
import {FilterWrapper, Filtro} from "./FiltersStyle" 

const Filters = ({ 
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  productName,
  setProductName,
}) => {
  return (
    <FilterWrapper> 
      <Filtro>Filtros</Filtro> 
      <div>
        <label>Valor mínimo:</label> 
        <input 
          type="number" 
          value={minValue}
          onChange={(ev) => setMinValue(ev.target.value)}
        />
      </div>
      <div>
        <label>Valor máximo:</label>
        <input
          type="number"
          value={maxValue}
          onChange={(ev) => setMaxValue(ev.target.value)}
        />
      </div>
      <div>
        <label>Busca por nome:</label>
        <input
          type="text"
          value={productName}
          onChange={(ev) => setProductName(ev.target.value)}
        />
      </div>
    </FilterWrapper>
  )
}

export default Filters
