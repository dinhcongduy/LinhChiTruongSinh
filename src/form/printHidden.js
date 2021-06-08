import React, { useRef } from "react";
import "./styles.css";
import styled, { createGlobalStyle } from "styled-components";
import { Button } from "@material-ui/core";
import ReactToPrint from "react-to-print";
import AirExportHawb from "src/form/airExportHawb";
import ParentPrintTemplate from "./ParentPrintTemplate";

const DontPrintWrapper = styled.div`
  @media print {
    display: none;
  }
`;

const PrintHidden = ({ awb }) => {
  const componentRef = useRef();
  const printingProps = [
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    },
    {
      id: "37532",
      uniqueId: "K9OR-HPIV",
      name: "email with empty string",
      email: "",
      status: "Pending",
      licensed: true,
      licenseCategory: "Manufacturer",
      licenseTypes: [
        {
          value: "1",
          label: "01 - skjdnfjks",
          number: "01",
          category: "dkfgndkj"
        }
      ],
      premisesAddress: {
        id: "91042",
        address: "lsdkjfk",
        address2: "",
        city: "ksjdfnkjn",
        state: "dkfgndkj",
        zipcode: "2434234",
        country: "United States"
      },
      createdAt: 1588371687031,
      updatedAt: 1588371687031,
      isMailingSameAsPremises: true,
      userSignUpLink: "http:sdkfjghdkjhgn"
    }
  ];
  return (
    <>
      <DontPrintWrapper>
        <ReactToPrint
          copyStyles
          trigger={() => (
            <Button
              aria-label="Print Licensee profile"
              aria-haspopup="false"
              color="primary"
            >
              Print
            </Button>
          )}
          content={() => componentRef.current}
        />
      </DontPrintWrapper>
      <ParentPrintTemplate ref={componentRef} printingProps={printingProps} />
    </>
  );
};
export default PrintHidden;
