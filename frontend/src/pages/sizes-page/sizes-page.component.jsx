import './sizes-page.styles.scss';

const SizesPage = () => {
	return (
		<div className="sizes-page center">
			<h2 className="heading-secondary">Tabela rozmiarów</h2>
			<span className="sizes-page__title">Leginsy:</span>
			<table>
				<tr>
					<th>rozmiar</th>
					<th>obwód talii</th>
					<th>obwód bioder</th>
					<th>długość całkowita</th>
				</tr>
				<tr>
					<td>XS</td>
					<td>S</td>
					<td>M</td>
					<td>L</td>
				</tr>
				<tr>
					<td>59-63</td>
					<td>64-67</td>
					<td>68-71</td>
					<td>72-76</td>
				</tr>
				<tr>
					<td>91</td>
					<td>93</td>
					<td>95</td>
					<td>97</td>
				</tr>
			</table>
			<span className="sizes-page__title">Crop-Topy:</span>
			<table>
				<tr>
					<th>rozmiar</th>
					<th>obwód pod biustem</th>
					<th>obwód w klatce piersiowej</th>
				</tr>
				<tr>
					<td>XS</td>
					<td>S</td>
					<td>M</td>
				</tr>
				<tr>
					<td>63-72</td>
					<td>73-84</td>
					<td>85-94</td>
				</tr>
				<tr>
					<td>76-83</td>
					<td>84-95</td>
					<td>96-102</td>
				</tr>
			</table>
			<span className="sizes-page__title">Spodenki:</span>
			<table>
				<tr>
					<th>rozmiar</th>
					<th>obwód talii</th>
					<th>obwód bioder</th>
				</tr>
				<tr>
					<td>XS</td>
					<td>S</td>
					<td>M</td>
				</tr>
				<tr>
					<td>58-63</td>
					<td>64-68</td>
					<td>69-73</td>
				</tr>
				<tr>
					<td>80-88</td>
					<td>89-96</td>
					<td>97-102</td>
				</tr>
			</table>
		</div>
	);
};

export default SizesPage;
