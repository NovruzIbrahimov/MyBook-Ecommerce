import React, { useContext, useState } from "react";
import "../ShopNowSection/shopNowSection.css";
import { CartContext } from "../../context/CartContext";
import { useSecondaryNotification } from "../../context/SecondaryNotificationContext";
import { useTranslation } from "react-i18next";

function ShopNowSection() {
  const { t } = useTranslation();
  const { cartItems } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleOrderConfirm = (e) => {
    e.preventDefault();

    if (name && email && address) {
      showSecondaryNotification(
        "Təşəkkür edirəm, uğurla sifariş etdiniz!",
        500
      );

      setName("");
      setEmail("");
      setAddress("");
    } else {
      showSecondaryNotification(
        "Zəhmət olmasa bütün təfərrüatları doldurun.",
        500
      );
    }
  };

  const trimTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };

  const showSecondaryNotification = useSecondaryNotification();
  return (
    <div className="shopNowSection">
      <div className="container mt-5">
        <h1 className="text-center mb-4">{t("shopNowSection.confirmText")}</h1>

        <div className="row justify-content-center">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="col-xl-2 col-lg-4 col-md-6 col-sm-12 mb-4"
            >
              <div className="shop-card">
                <img
                  src={item.imageUrl}
                  className="shop-card-img-top"
                  alt={item.title1}
                />
                <div className="shop-card-body">
                  <h5 className="shop-card-title">
                    {trimTitle(item.title1, 15)}
                  </h5>
                  <p className="shop-card-text">{item.title2}</p>
                  <p className="shop-card-text-price">Price: ${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 col-md-8">
            <form onSubmit={handleOrderConfirm}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  {t("shopNowSection.name")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("shopNowSection.nameInput")}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  {t("shopNowSection.mail")}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("shopNowSection.mailInput")}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  {t("shopNowSection.address")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={t("shopNowSection.addressInput")}
                  required
                />
              </div>

              <button type="submit" className="btn btn-confirm w-100">
                {t("shopNowSection.confirmButton")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopNowSection;
