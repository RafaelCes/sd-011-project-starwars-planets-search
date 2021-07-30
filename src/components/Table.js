import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const Table = () => {
  const { filtered } = useContext(DataContext);

  const headerTitles = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'Url',
  ];

  return (
    <table>
      <tbody>
        <tr>
          { headerTitles.map((title, index) => (
            <th key={ index }>
              {title}
            </th>
          ))}
        </tr>
        { filtered.map((planet, index) => (
          <tr key={ index }>
            <td>
              {planet.name}
            </td>
            <td>
              {planet.rotation_period}
            </td>
            <td>
              {planet.orbital_period}
            </td>
            <td>
              {planet.diameter}
            </td>
            <td>
              {planet.climate}
            </td>
            <td>
              {planet.gravity}
            </td>
            <td>
              {planet.terrain}
            </td>
            <td>
              {planet.surface_water}
            </td>
            <td>
              {planet.population}
            </td>
            <td>
              {planet.films}
            </td>
            <td>
              {planet.created}
            </td>
            <td>
              {planet.edited}
            </td>
            <td>
              {planet.url}
            </td>
          </tr>))}
      </tbody>
    </table>
  );
};

export default Table;
