import React, { Fragment } from "react";
import Image from "next/image";
import {
  BannerPage,
  TextImage,
  Button,
  BreadCrumbScript,
} from "../../components/container";
import styles from "../../components/Products/Banner.module.scss";
import Introduction from "../../components/Products/Introduction/Introduction";
import Product from "../../components/Home/Product/Product";
import { checkUserIsBot } from "../../util";
import { getProductById } from "../../config/ApiProducts";
import axiosConfig from "../../service/base";
import BannerLanding from "../../components/Products/BannerLanding/BannerLanding";
import { apiGetProducts } from "../../config/ApiProducts";
import useMedia from "../../hook/use-media";
import { DataImageProduct } from "../../components/container/DataImageProduct/DataImageProduct";
import { useRouter } from "next/router";
const Products = ({ data_product, other_products, images }) => {
  const isMobile = useMedia('(max-width: 991px)');
  const isMiddleBox = useMedia('(max-width: 1250px)');
  const router = useRouter();
  
  const findImageProduct = DataImageProduct.find(item => item.id.toString() === router.query.id.toString());
  return (
    <>
      <BreadCrumbScript
        title={`${data_product.title} || MH-Solution`}
        dataElement={[
          {
            name: data_product.title,
            href: `/products/${data_product.id}`,
          },
          {
            name: "Website",
            href: data_product.website,
          },
        ]}
      />
      <BannerPage
        title={data_product?.title || "Không có dữ liệu"}
        classNameBanner={styles.banner}
        classNameBox={styles.box}
        style={{background: `url('${findImageProduct?.href || "/banner_product_2.png"}')`}}
      />
      <TextImage
        mainTitle={data_product?.title}
        title={
          data_product?.content
            ? data_product?.content
            : "Không có dữ liệu"
        }
        src={"/Products.png"}
        aosImage="fade-left"
        iconImage={null}
        classImage={styles['text-image']}
        classText={styles['text-banner']}
        classNameContainer={styles.container}
        className={`flex-row-reverse ${styles['container-text']}`}
        aos="fade-right"
      />
      <Introduction
        aos="fade-left"
        title="Chúng tôi cung cấp giải pháp với các ưu điểm vượt trội"
        src={"/product_intro_1.png"}
        imageConfig={{
          "data-aos": "fade-right",
        }}
      >
        {data_product?.infos?.length > 0 ? (
          data_product?.infos?.map((item, index) => {
            return (
              <Fragment key={index}>
                <h5>{item.title}</h5>
                <p>{item.content}</p>
              </Fragment>
            );
          })
        ) : (
          <p className="text-center">Không có dữ liệu</p>
        )}
      </Introduction>
      {!data_product.landing_page && (
        <Introduction
          imageConfig={{ "data-aos": "fade-left" }}
          className={styles.information}
          src={isMobile ? null : "/product_intro_1.png"}
          childrenClassName={styles.text}
        >
          <div data-aos="fade-right" data-aos-delay={500} data-aos-offset={300}>
            <h5>Tìm hiểu thêm thông tin về Giải pháp của chúng tôi</h5>
            <p className={styles.title}>
            Hãy để các chuyên gia tư vấn miễn phí và có thời gian trải nghiệm trước khi quyết định sử dụng giải pháp của chúng tôi!
            </p>
            <div
              className={`d-flex align-items-center justify-content-between ${styles["information-box"]}`}
            >
              <div className={`d-flex align-items-center ${styles.content}`}>
                <Image
                  src={"/Icon/phone-black-icon.svg"}
                  alt=""
                  width={isMiddleBox ? "15px" : "24px"}
                  height={isMiddleBox ? "15px" : "24px"}
                />
                <span>0975-718-168</span>
              </div>
              <Button className={styles.btn}>truy cập đến trang web</Button>
            </div>
          </div>
        </Introduction>
      )}
      {data_product?.landing_page && <BannerLanding />}
      <Product
        className={styles.background}
        classNameContainer={styles["container-product"]}
        product={other_products}
        title="sản phẩm khác của chúng tôi"
        classNameGrid={styles.grid}
        images={images}
      />
    </>
  );
};

export const getServerSideProps = async ({ req, params }) => {
  const userIsBot = checkUserIsBot(req);
  const { id } = params;

  const filterImage = DataImageProduct.filter(item => {
    return item.id.toString() !== id.toString();
  })
  const data_product = await axiosConfig({
    url: getProductById(id),
  });



  const all_products = await axiosConfig({
    url: apiGetProducts,
    method: "POST",
    data: {
      page_size: 4
    },
  });

  if (data_product.code >= 400 || all_products.code >= 400) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      isDisabledAnimation: userIsBot,
      data_product: data_product?.result,
      other_products: all_products?.result?.items?.filter(item => {
        return +item.id !== +id;
      }),
      images: filterImage
    },
  };
};
export default Products;
