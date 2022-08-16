const Address = () => {
  return (
    <div className="userProfile-address">
      <div className="userProfile-address-row">
        <input type="text" placeholder="Country" />
        <input type="text" placeholder="City" />
      </div>
      <div className="userProfile-address-row">
        <input type="text" placeholder="Street" />
        <input type="text" placeholder="Voivodeship" />
      </div>
    </div>
  );
};

export default Address;
