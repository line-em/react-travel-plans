import React from "react";
import { MapTrifold, MapPinLine, Info, AirplaneTilt, IconContext } from "phosphor-react";

const Places = (props) => {
	return (
		<section className="places__item">
			<IconContext.Provider
				value={{
					size: 24,
					color: "var(--primary)",
					weight: "duotone"
				}}
			>
				<div className="places__image">
					<img src={`./src/imgs/${props.image}`} alt={props.city} />
					<div className="places__image__location--desktop">
						<div className="places__extraInfo__span-items">
							<MapPinLine />
							<p>
								{props.city}, {props.country}
								<a
									href={props.googleMapsUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									Google Maps
								</a>
							</p>
						</div>
					</div>
				</div>

				<div className="places__textContent">
					<h2>{props.city}</h2>
					<p>{props.description}</p>

					<div className="places__extraInfo">
						<div className="places__extraInfo__span-items">
							<MapTrifold />
							<p>
								<b>Go to:</b> <span>{props.pointsOfInterest.join(", ")}</span>
							</p>
						</div>
					</div>

					<div className="places__extraInfo--mobile">
						<div className="places__extraInfo__span-items">
							<MapPinLine />
							<p>
								{props.city}, {props.country}
								<a
									href={props.googleMapsUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									Google Maps
								</a>
							</p>
						</div>
					</div>

					<div className="places__extraInfo">
						<div className="places__extraInfo__normal-items">
							<Info />
							<p>
								<b>Info:</b>
								<a
									href={props.japanGuide}
									target="_blank"
									rel="noopener noreferrer"
								>
									Japan Guide
								</a>
							</p>
						</div>

						<div className="places__extraInfo__span-items">
							<AirplaneTilt />
							<p>
								<b>Itinerary:</b>
								<a
									href={props.nerdNomads}
									target="_blank"
									rel="noopener noreferrer"
								>
									NerdNomads
								</a>
							</p>
						</div>
					</div>
				</div>
			</IconContext.Provider>
		</section>
	);
};

export default Places;
