import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function MappedRecipeData({data}) {
    return (
        <>
        {
            data?.map((item, index) => {
            return (
                <div key={index}>
                    <section className="d-flex single-popular-recipe justify-content-start container">
                        <Link to={`/recipe/${item.id}`} className="col-md-8 mt-5">
                            <img src={item.image_path} className="img-fluid img-thumbnail rounded float-start" loading="eager" decoding="async" width="500" height="350" alt={item.title}/>
                        </Link>
                    </section>
                    <section className="d-flex ingredient-popular-recipe justify-content-end flex-column offset-md-8">
                        <h3>{item.title}</h3>
                        <p className="ingredient text-break">
                            {item.ingredients}
                        </p>
                        <p className="reaction-row bg-warning">10 likes - 12 comments - 3 bookmarks</p>
                        <mark className="account">
                            <img className="rounded-circle" src={item.image_path} loading="eager" decoding="async" width="30" height="30" alt={item.user_name}/>
                            {item.user_name}
                        </mark>
                    </section>
                </div>
            )})
        }
        </>
    )
}

MappedRecipeData.propTypes = {
    data: PropTypes.any.isRequired
}