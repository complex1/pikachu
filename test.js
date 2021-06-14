const definitions = {
  "HotelOrderCancelRequest": {
    "type": "object",
    "properties": {
      "cancellationReason": {
        "$ref": "#/definitions/OrderCommentDTO"
      },
      "orderId": {
        "type": "string"
      },
      "orderItemId": {
        "type": "string"
      }
    }
  },
  "Customer": {
    "type": "object",
    "properties": {
      "customerLogonId": {
        "type": "string"
      },
      "firstName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "name": {
        "type": "string"
      }
    }
  },
  "ReconciliationReportRequest": {
    "type": "object",
    "properties": {
      "endDate": {
        "type": "string",
        "format": "date-time"
      },
      "providerCode": {
        "type": "string"
      },
      "startDate": {
        "type": "string",
        "format": "date-time"
      }
    }
  },
  "CartRevoResponse«CartBookResponse»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "description": "Object value of response",
        "$ref": "#/definitions/CartBookResponse"
      }
    }
  },
  "PaymentInfoXHotelDTO": {
    "type": "object",
    "properties": {
      "active": {
        "type": "boolean"
      },
      "approvedProcessingDelayInMilisecond": {
        "type": "integer",
        "format": "int64"
      },
      "bankShortName": {
        "type": "string"
      },
      "creditCard": {
        "type": "boolean"
      },
      "description": {
        "type": "string"
      },
      "expiredTimeDisplayCustomerInSecond": {
        "type": "integer",
        "format": "int64"
      },
      "expiredTimeInSecond": {
        "type": "integer",
        "format": "int64"
      },
      "holidayAffected": {
        "type": "boolean"
      },
      "installment": {
        "type": "boolean"
      },
      "listChannelId": {
        "type": "string"
      },
      "maxAmount": {
        "type": "number"
      },
      "minAmount": {
        "type": "number"
      },
      "paymentBackend": {
        "type": "string"
      },
      "paymentEngine": {
        "type": "string"
      },
      "paymentGroup": {
        "type": "string"
      },
      "paymentInfoAdditionalField": {
        "type": "object",
        "additionalProperties": {
          "type": "boolean"
        }
      },
      "paymentMethod": {
        "type": "string"
      },
      "paymentRule": {
        "type": "string"
      },
      "refundable": {
        "type": "boolean"
      },
      "repayable": {
        "type": "boolean"
      },
      "sequence": {
        "type": "integer",
        "format": "int32"
      },
      "swiftBankCode": {
        "type": "string"
      }
    }
  },
  "CartRevoResponse«CheckOrderPaymentResponse»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "description": "Object value of response",
        "$ref": "#/definitions/CheckOrderPaymentResponse"
      }
    }
  },
  "CheckOrderPaymentRequest": {
    "type": "object",
    "properties": {
      "callbackData": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      }
    }
  },
  "PassengerRequestDTO": {
    "type": "object",
    "properties": {
      "baggageDeparture": {
        "type": "string"
      },
      "baggageReturn": {
        "type": "string"
      },
      "baggageSegment": {
        "$ref": "#/definitions/BaggageSegmentDTO"
      },
      "dateOfBirth": {
        "type": "string"
      },
      "identityCreatedDate": {
        "type": "string"
      },
      "identityExpiredDate": {
        "type": "string"
      },
      "identityIssuingCountry": {
        "type": "string"
      },
      "identityNumber": {
        "type": "string"
      },
      "mealsDeparture": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/SsrDetailDTO"
        }
      },
      "mealsReturn": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/SsrDetailDTO"
        }
      },
      "nationality": {
        "type": "string"
      },
      "passengerFirstName": {
        "type": "string"
      },
      "passengerFullName": {
        "type": "string"
      },
      "passengerLastName": {
        "type": "string"
      },
      "passengerTitle": {
        "type": "string",
        "enum": [
          "Mr",
          "Mrs",
          "Ms",
          "Mstr",
          "Miss"
        ]
      },
      "passengerType": {
        "type": "string",
        "enum": [
          "CHILD",
          "ADULT",
          "INFANT"
        ]
      }
    }
  },
  "LevelDTO": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string"
      },
      "priority": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "PaymentApprovalRequest": {
    "type": "object",
    "properties": {
      "extData": {
        "type": "object",
        "description": "Extended Payment Data",
        "additionalProperties": {
          "type": "string"
        }
      },
      "orderId": {
        "type": "string",
        "description": "Order ID"
      },
      "paymentMethod": {
        "type": "string",
        "description": "Payment Method"
      },
      "uuid": {
        "type": "string",
        "description": "Uuid"
      }
    },
    "description": "PaymentApprovalRequest"
  },
  "BaggageSegmentDTO": {
    "type": "object",
    "properties": {
      "baggageDepartureSegment": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/BaggageSSRDetailDTO"
        }
      },
      "baggageReturnSegment": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/BaggageSSRDetailDTO"
        }
      }
    }
  },
  "PaymentInfoKeyDTO": {
    "type": "object",
    "properties": {
      "paymentEngine": {
        "type": "string"
      },
      "paymentMethod": {
        "type": "string"
      }
    }
  },
  "SsrDetailDTO": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "format": "double"
      },
      "code": {
        "type": "string"
      },
      "information": {
        "type": "string"
      }
    }
  },
  "MasterInstallmentSchemaDTO": {
    "type": "object",
    "properties": {
      "description": {
        "type": "string"
      },
      "interestRate": {
        "type": "number"
      },
      "minAmount": {
        "type": "integer",
        "format": "int64"
      },
      "paymentMethod": {
        "type": "string"
      },
      "schemaId": {
        "type": "integer",
        "format": "int64"
      },
      "tenor": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "CartMergeRequest": {
    "type": "object",
    "properties": {
      "customerLogonId": {
        "type": "string"
      },
      "guestCartId": {
        "type": "string"
      },
      "guestOrder": {
        "type": "boolean"
      }
    }
  },
  "PaymentInfo": {
    "type": "object",
    "properties": {
      "expiredTimeDisplayCustomerInSecond": {
        "type": "integer",
        "format": "int64"
      },
      "paymentMethod": {
        "type": "string"
      }
    }
  },
  "PaymentPunchoutDTO": {
    "type": "object",
    "properties": {
      "body": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "httpMethod": {
        "type": "string"
      },
      "parameter": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "redirectUrl": {
        "type": "string"
      },
      "transactionId": {
        "type": "string"
      }
    }
  },
  "InstallmentSchemaDTO": {
    "type": "object",
    "properties": {
      "interest": {
        "type": "number"
      },
      "monthlyInstallment": {
        "type": "number"
      },
      "tenor": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "LocationXHotelDTO": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string"
      },
      "areaCode": {
        "type": "string"
      },
      "areaName": {
        "type": "string"
      },
      "countryCode": {
        "type": "string"
      },
      "countryName": {
        "type": "string"
      },
      "email": {
        "type": "string"
      },
      "facsimile": {
        "type": "string"
      },
      "latitude": {
        "type": "number",
        "format": "double"
      },
      "longitude": {
        "type": "number",
        "format": "double"
      },
      "telephoneNumber": {
        "type": "string"
      },
      "website": {
        "type": "string"
      },
      "zipCode": {
        "type": "string"
      },
      "zone": {
        "type": "string"
      },
      "zoneName": {
        "type": "string"
      }
    }
  },
  "DoPaymentRequest": {
    "type": "object",
    "required": [
      "combinePaymentAmount",
      "combinePaymentPaymentMethod",
      "extendedData"
    ],
    "properties": {
      "extendedData": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "combinePaymentPaymentMethod": {
        "type": "string"
      },
      "combinePaymentAmount": {
        "type": "integer",
        "format": "int64"
      }
    }
  },
  "CartPassengerRequest": {
    "type": "object",
    "properties": {
      "contact": {
        "$ref": "#/definitions/ContactDTO"
      },
      "customerBookingRequests": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "hasInsurance": {
        "type": "boolean"
      },
      "itemType": {
        "type": "string",
        "enum": [
          "FLIGHT",
          "RAIL",
          "HOTEL"
        ]
      },
      "passengers": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/PassengerRequestDTO"
        }
      }
    }
  },
  "OrderCommentDTO": {
    "type": "object",
    "properties": {
      "commentBy": {
        "type": "string"
      },
      "commentDate": {
        "type": "string",
        "format": "date-time"
      },
      "commentDesc": {
        "type": "string"
      },
      "commentType": {
        "type": "string",
        "enum": [
          "BOOKING_CANCELLATION",
          "REVERSE_CANCEL",
          "CUSTOMER_BOOKING_REQUEST"
        ]
      }
    }
  },
  "PremiumDTO": {
    "type": "object",
    "properties": {
      "adult": {
        "type": "number",
        "format": "double"
      },
      "child": {
        "type": "number",
        "format": "double"
      },
      "infant": {
        "type": "number",
        "format": "double"
      },
      "total": {
        "type": "number",
        "format": "double"
      }
    }
  },
  "CustomerXHotelDTO": {
    "type": "object",
    "properties": {
      "blacklistLevel": {
        "type": "string"
      },
      "customerAddress": {
        "$ref": "#/definitions/AddressXHotelDTO"
      },
      "customerId": {
        "type": "string"
      },
      "dateOfBirth": {
        "type": "string",
        "format": "date-time"
      },
      "defaultBilling": {
        "type": "string"
      },
      "defaultNotification": {
        "type": "string"
      },
      "defaultShipping": {
        "type": "string"
      },
      "gender": {
        "type": "string"
      },
      "level": {
        "$ref": "#/definitions/LevelDTO"
      },
      "needVerifiedPhoneNumber": {
        "type": "boolean"
      },
      "phoneNumberVerified": {
        "type": "boolean"
      },
      "postPnvMember": {
        "type": "boolean"
      },
      "userName": {
        "type": "string"
      },
      "userType": {
        "type": "string"
      }
    }
  },
  "InstallmentInfoResponse": {
    "type": "object",
    "properties": {
      "extendedData": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "installmentSchema": {
        "$ref": "#/definitions/MasterInstallmentSchemaDTO"
      },
      "minAmount": {
        "type": "string"
      },
      "monthlyInstallment": {
        "type": "number"
      },
      "monthlyInstallmentAmount": {
        "type": "string"
      },
      "tenorDescription": {
        "type": "string"
      }
    }
  },
  "CartRevoResponse«SystemParameterDTO»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "description": "Object value of response",
        "$ref": "#/definitions/SystemParameterDTO"
      }
    }
  },
  "AdditionalPurchaseDTO": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "integer",
        "format": "int64"
      },
      "businessChannel": {
        "type": "string"
      },
      "createdBy": {
        "type": "string"
      },
      "createdDate": {
        "type": "integer",
        "format": "int64"
      },
      "customer": {
        "$ref": "#/definitions/CustomerDTO"
      },
      "expiryDate": {
        "type": "string",
        "format": "date-time"
      },
      "id": {
        "type": "string"
      },
      "ipAddress": {
        "type": "string"
      },
      "memberId": {
        "type": "string"
      },
      "orderDate": {
        "type": "string",
        "format": "date-time"
      },
      "orderId": {
        "type": "string"
      },
      "orderPaidEmailSent": {
        "type": "boolean"
      },
      "orderReceivedEmailSent": {
        "type": "boolean"
      },
      "payment": {
        "$ref": "#/definitions/PaymentDTO"
      },
      "referenceId": {
        "type": "string"
      },
      "referenceType": {
        "type": "string"
      },
      "sendToXFinance": {
        "type": "boolean"
      },
      "sendToZurich": {
        "type": "boolean"
      },
      "status": {
        "type": "string"
      },
      "storeId": {
        "type": "string"
      },
      "transactionInfo": {
        "$ref": "#/definitions/TransactionInfoDTO"
      },
      "updatedBy": {
        "type": "string"
      },
      "updatedDate": {
        "type": "integer",
        "format": "int64"
      },
      "version": {
        "type": "string"
      }
    }
  },
  "OrderItemGroupDTO": {
    "type": "object",
    "properties": {
      "acquiredPoint": {
        "type": "number",
        "format": "double"
      },
      "adjustments": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/AdjustmentDTO"
        }
      },
      "alternativeProviderReferenceCode": {
        "type": "string"
      },
      "baggageChange": {
        "type": "boolean"
      },
      "bookingCode": {
        "type": "string"
      },
      "bookingLogs": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/BookingLogDTO"
        }
      },
      "bookingMessage": {
        "type": "string"
      },
      "bookingStatus": {
        "type": "string",
        "enum": [
          "BOOKING_PROCESSING",
          "BOOKING_FAILED",
          "BOOKED",
          "CONFIRM_PROCESSING",
          "CONFIRM_FAILED",
          "CONFIRMED",
          "CANCEL_BOOKING",
          "AMEND_BOOK"
        ]
      },
      "itemGroupLogs": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/OrderLogDTO"
        }
      },
      "itemType": {
        "type": "string",
        "enum": [
          "FLIGHT",
          "RAIL",
          "HOTEL"
        ]
      },
      "merchantCode": {
        "type": "string"
      },
      "numericCode": {
        "type": "string"
      },
      "orderItemFailureReason": {
        "type": "string"
      },
      "orderItemGroupId": {
        "type": "string"
      },
      "orderItemNotes": {
        "type": "string"
      },
      "orderItemStatus": {
        "type": "string",
        "enum": [
          "M",
          "C",
          "X",
          "D",
          "CR",
          "OS"
        ]
      },
      "originalExpiryTime": {
        "type": "string",
        "format": "date-time"
      },
      "priceDiff": {
        "type": "number",
        "format": "double"
      },
      "providerCode": {
        "type": "string"
      },
      "providerExpiryTime": {
        "type": "string",
        "format": "date-time"
      },
      "providerMarginCalculation": {
        "type": "boolean"
      },
      "providerMerchantType": {
        "type": "string"
      },
      "providerName": {
        "type": "string"
      },
      "providerPaymentDate": {
        "type": "string",
        "format": "date-time"
      },
      "providerReferenceCode": {
        "type": "string"
      },
      "providerSettlementType": {
        "type": "string",
        "enum": [
          "CREDIT_LIMIT",
          "BALANCE",
          "INVOICE"
        ]
      },
      "totalDiscount": {
        "type": "number",
        "format": "double"
      },
      "totalHandlingFee": {
        "type": "number",
        "format": "double"
      },
      "totalOrderItemGroup": {
        "type": "number",
        "format": "double"
      },
      "totalOrderItemGroupAdjustment": {
        "type": "number",
        "format": "double"
      },
      "totalOrderItemGroupCashback": {
        "type": "number",
        "format": "double"
      }
    }
  },
  "ResendTicketRequest": {
    "type": "object",
    "properties": {
      "email": {
        "type": "string"
      },
      "orderId": {
        "type": "string"
      }
    }
  },
  "CartRevoResponse«OrdersCount»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "description": "Object value of response",
        "$ref": "#/definitions/OrdersCount"
      }
    }
  },
  "CartRevoResponse«PdfResponse»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "description": "Object value of response",
        "$ref": "#/definitions/PdfResponse"
      }
    }
  },
  "SyncAdjustmentHotelDTO": {
    "type": "object",
    "properties": {
      "adjustmentGroup": {
        "type": "string",
        "enum": [
          "ORDER",
          "SHIPPING",
          "PRODUCT"
        ]
      },
      "adjustmentId": {
        "type": "string"
      },
      "adjustmentName": {
        "type": "string"
      },
      "adminDesc": {
        "type": "string"
      },
      "amount": {
        "type": "number",
        "format": "double"
      },
      "code": {
        "type": "string"
      },
      "couponId": {
        "type": "string"
      },
      "csMargin": {
        "type": "number",
        "format": "double"
      },
      "dayEndTime": {
        "type": "string",
        "format": "date-time"
      },
      "dayStartTime": {
        "type": "string",
        "format": "date-time"
      },
      "description": {
        "type": "string"
      },
      "endDate": {
        "type": "string",
        "format": "date-time"
      },
      "forMarginCalculation": {
        "type": "boolean"
      },
      "gdnMargin": {
        "type": "number",
        "format": "double"
      },
      "maximumRewardValue": {
        "type": "integer",
        "format": "int64"
      },
      "merchantMargin": {
        "type": "number",
        "format": "double"
      },
      "othersMargin": {
        "type": "number",
        "format": "double"
      },
      "purchaseConditionType": {
        "type": "string",
        "enum": [
          "QUANTITY",
          "AMOUNT"
        ]
      },
      "redemptionType": {
        "type": "string"
      },
      "rewardGifts": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "rewardMinValue": {
        "type": "integer",
        "format": "int64"
      },
      "rewardType": {
        "type": "string"
      },
      "rewardValue": {
        "type": "integer",
        "format": "int64"
      },
      "startDate": {
        "type": "string",
        "format": "date-time"
      }
    }
  },
  "UpdateCRStatusRequest": {
    "type": "object",
    "properties": {
      "bookingCode": {
        "type": "string"
      },
      "orderItemGroupId": {
        "type": "string"
      },
      "passengerList": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/PassengerTicketRequestDTO"
        }
      },
      "providerReferenceCode": {
        "type": "string"
      },
      "status": {
        "type": "string",
        "enum": [
          "M",
          "C",
          "X",
          "D",
          "CR",
          "OS"
        ]
      }
    }
  },
  "CartRevoResponse«List«OrderResponse»»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "type": "array",
        "description": "Object value of response",
        "items": {
          "$ref": "#/definitions/OrderResponse"
        }
      }
    }
  },
  "AddressXHotelDTO": {
    "type": "object",
    "properties": {
      "addressId": {
        "type": "string"
      },
      "addressLabel": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "country": {
        "type": "string"
      },
      "email": {
        "type": "string"
      },
      "firstName": {
        "type": "string"
      },
      "fullOrLegalName": {
        "type": "string"
      },
      "kecamatan": {
        "type": "string"
      },
      "kelurahan": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "phoneNumber": {
        "type": "string"
      },
      "postalCode": {
        "type": "string"
      },
      "state": {
        "type": "string"
      },
      "streetAddress1": {
        "type": "string"
      }
    }
  },
  "AdjustmentDTO": {
    "type": "object",
    "properties": {
      "adjustmentGroup": {
        "type": "string"
      },
      "adjustmentId": {
        "type": "string"
      },
      "adjustmentName": {
        "type": "string"
      },
      "adminDesc": {
        "type": "string"
      },
      "amount": {
        "type": "number",
        "format": "double"
      },
      "code": {
        "type": "string"
      },
      "couponId": {
        "type": "string"
      },
      "csMargin": {
        "type": "number",
        "format": "double"
      },
      "dayEndTime": {
        "type": "string",
        "format": "date-time"
      },
      "dayStartTime": {
        "type": "string",
        "format": "date-time"
      },
      "description": {
        "type": "string"
      },
      "endDate": {
        "type": "string",
        "format": "date-time"
      },
      "forMarginCalculation": {
        "type": "boolean"
      },
      "gdnMargin": {
        "type": "number",
        "format": "double"
      },
      "maximumRewardValue": {
        "type": "integer",
        "format": "int64"
      },
      "merchantMargin": {
        "type": "number",
        "format": "double"
      },
      "othersMargin": {
        "type": "number",
        "format": "double"
      },
      "purchaseConditionType": {
        "type": "string"
      },
      "redemptionType": {
        "type": "string"
      },
      "rewardGifts": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "rewardMinValue": {
        "type": "integer",
        "format": "int64"
      },
      "rewardType": {
        "type": "string"
      },
      "rewardValue": {
        "type": "integer",
        "format": "int64"
      },
      "startDate": {
        "type": "string",
        "format": "date-time"
      }
    }
  },
  "PassengerTicketRequestDTO": {
    "type": "object",
    "properties": {
      "passengerFullName": {
        "type": "string"
      },
      "passengerType": {
        "type": "string",
        "enum": [
          "CHILD",
          "ADULT",
          "INFANT"
        ]
      },
      "ticketNumbers": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "PageOrderResponse": {
    "type": "object",
    "properties": {
      "contents": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/OrderResponse"
        }
      },
      "number": {
        "type": "integer",
        "format": "int32"
      },
      "size": {
        "type": "integer",
        "format": "int32"
      },
      "totalElements": {
        "type": "integer",
        "format": "int64"
      }
    }
  },
  "TravellerDTO": {
    "type": "object",
    "properties": {
      "dateOfBirth": {
        "type": "string"
      },
      "identityCreatedDate": {
        "type": "string"
      },
      "identityExpiredDate": {
        "type": "string"
      },
      "identityIssuingCountry": {
        "type": "string"
      },
      "identityNumber": {
        "type": "string"
      },
      "nationality": {
        "type": "string"
      },
      "passengerFirstName": {
        "type": "string"
      },
      "passengerFullName": {
        "type": "string"
      },
      "passengerLastName": {
        "type": "string"
      },
      "passengerMiddleName": {
        "type": "string"
      },
      "passengerTitle": {
        "type": "string",
        "enum": [
          "Mr",
          "Mrs",
          "Ms",
          "Mstr",
          "Miss"
        ]
      },
      "travellerId": {
        "type": "string"
      }
    }
  },
  "ApprovePaymentResponse": {
    "type": "object",
    "properties": {
      "success": {
        "type": "boolean"
      }
    }
  },
  "CartAddItemRequest": {
    "type": "object",
    "properties": {
      "customerIp": {
        "type": "string"
      },
      "hotelContentVersion": {
        "type": "string"
      },
      "items": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/CartItemRequest"
        }
      },
      "language": {
        "type": "string"
      },
      "userAgent": {
        "type": "string"
      }
    }
  },
  "InsuranceDetailDTO": {
    "type": "object",
    "properties": {
      "deposit": {
        "type": "boolean"
      },
      "id": {
        "type": "string"
      },
      "merchantCode": {
        "type": "string"
      },
      "merchantType": {
        "type": "string"
      },
      "premium": {
        "$ref": "#/definitions/PremiumDTO"
      },
      "providerCode": {
        "type": "string"
      },
      "status": {
        "type": "string",
        "enum": [
          "PENDING",
          "ISSUING",
          "ISSUED",
          "FAILED"
        ]
      }
    }
  },
  "PaxInfoDTO": {
    "type": "object",
    "properties": {
      "age": {
        "type": "integer",
        "format": "int32"
      },
      "email": {
        "type": "string"
      },
      "guestName": {
        "type": "string"
      },
      "phoneNumber": {
        "type": "string"
      },
      "surName": {
        "type": "string"
      }
    }
  },
  "ApplyCouponCodeRequest": {
    "type": "object",
    "properties": {
      "couponId": {
        "type": "string"
      },
      "previousCouponId": {
        "type": "string"
      }
    }
  },
  "MarkupDataXHotelDTO": {
    "type": "object",
    "properties": {
      "amountValue": {
        "type": "number",
        "format": "double"
      },
      "markupCode": {
        "type": "string"
      },
      "markupType": {
        "type": "string",
        "enum": [
          "HOTEL",
          "STAR_RATING",
          "HOTEL_AREA",
          "BASIC",
          "DEFAULT"
        ]
      },
      "percentageValue": {
        "type": "number",
        "format": "double"
      }
    }
  },
  "BedBankXHotelDTO": {
    "type": "object",
    "properties": {
      "bedBankCode": {
        "type": "string"
      },
      "businessPartnerCode": {
        "type": "string"
      },
      "businessPartnerName": {
        "type": "string"
      },
      "commissionType": {
        "type": "string"
      },
      "financeLimitType": {
        "type": "string"
      },
      "merchantType": {
        "type": "string",
        "enum": [
          "CM",
          "MP"
        ]
      }
    }
  },
  "UpdatePaymentStatusRequest": {
    "type": "object",
    "properties": {
      "extendedData": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "orderId": {
        "type": "string"
      },
      "paymentStatus": {
        "type": "string"
      }
    }
  },
  "SyncRoomCategoryDTO": {
    "type": "object",
    "properties": {
      "adjustment": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/SyncAdjustmentHotelDTO"
        }
      },
      "bedBankAdditionalData": {
        "$ref": "#/definitions/BedBankAdditionalDataDTO"
      },
      "boardData": {
        "$ref": "#/definitions/BoardXHotelDTO"
      },
      "breakfast": {
        "type": "boolean"
      },
      "cancelPolicy": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/CancelPolicyXHotelDTO"
        }
      },
      "currency": {
        "type": "string"
      },
      "hotelInformations": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/HotelInformationDTO"
        }
      },
      "hotelMandatory": {
        "type": "boolean"
      },
      "listPrice": {
        "type": "number",
        "format": "double"
      },
      "markupData": {
        "$ref": "#/definitions/MarkupDataXHotelDTO"
      },
      "nettPriceFromBedBank": {
        "type": "number",
        "format": "double"
      },
      "paxInfo": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/PaxInfoDTO"
        }
      },
      "rateClass": {
        "type": "string"
      },
      "refundable": {
        "type": "boolean"
      },
      "roomCategoryCode": {
        "type": "string"
      },
      "roomCategoryName": {
        "type": "string"
      },
      "roomCode": {
        "type": "string"
      },
      "roomType": {
        "type": "string",
        "enum": [
          "SINGLE",
          "DOUBLE_OR_TWIN",
          "TRIPLE",
          "QUAD"
        ]
      },
      "supplier": {
        "type": "string"
      },
      "vatNumber": {
        "type": "string"
      }
    }
  },
  "PaymentInfoDTO": {
    "type": "object",
    "properties": {
      "active": {
        "type": "boolean"
      },
      "alias": {
        "type": "string"
      },
      "approvedProcessingDelayInMilisecond": {
        "type": "integer",
        "format": "int64"
      },
      "bankShortName": {
        "type": "string"
      },
      "billingAddressRequired": {
        "type": "boolean"
      },
      "checkVerificationStatus": {
        "type": "boolean"
      },
      "description": {
        "type": "string"
      },
      "expiredTimeDisplayCustomerInSecond": {
        "type": "integer",
        "format": "int64"
      },
      "expiredTimeInSecond": {
        "type": "integer",
        "format": "int64"
      },
      "hidden": {
        "type": "boolean"
      },
      "holidayAffected": {
        "type": "boolean"
      },
      "listChannelId": {
        "type": "string"
      },
      "minAmount": {
        "type": "string"
      },
      "paymentBackend": {
        "type": "string"
      },
      "paymentEngine": {
        "type": "string"
      },
      "paymentGroup": {
        "type": "string"
      },
      "paymentMethod": {
        "type": "string"
      },
      "paymentRule": {
        "type": "string"
      },
      "refundable": {
        "type": "boolean"
      },
      "repayable": {
        "type": "boolean"
      },
      "sequence": {
        "type": "integer",
        "format": "int32"
      },
      "swiftBankCode": {
        "type": "string"
      },
      "tnc": {
        "type": "string"
      }
    }
  },
  "SystemParameterDTO": {
    "type": "object",
    "properties": {
      "description": {
        "type": "string"
      },
      "value": {
        "type": "string"
      },
      "variable": {
        "type": "string"
      }
    }
  },
  "OrderResponse": {
    "type": "object",
    "properties": {
      "acquiredPoint": {
        "type": "number",
        "format": "double"
      },
      "appliedCouponAndValue": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/AppliedCouponAndValueDTO"
        }
      },
      "appliedCouponCodeAndValue": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/AppliedCouponAndValueDTO"
        }
      },
      "appliedPromoCodeAndValue": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/AppliedPromoCodeAndValueDTO"
        }
      },
      "availablePaymentByPaymentMethod": {
        "type": "object",
        "additionalProperties": {
          "$ref": "#/definitions/PaymentInfoDTO"
        }
      },
      "availablePaymentsByGroup": {
        "type": "object",
        "additionalProperties": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/PaymentInfoDTO"
          }
        }
      },
      "cartBusinessChannel": {
        "type": "string"
      },
      "cartId": {
        "type": "string"
      },
      "changePaymentable": {
        "type": "boolean"
      },
      "contact": {
        "$ref": "#/definitions/ContactDTO"
      },
      "currency": {
        "type": "string"
      },
      "customer": {
        "$ref": "#/definitions/CustomerDTO"
      },
      "installmentMonths": {
        "type": "integer",
        "format": "int32"
      },
      "installmentRate": {
        "type": "number",
        "format": "double"
      },
      "insurance": {
        "$ref": "#/definitions/InsuranceDTO"
      },
      "ipAddress": {
        "type": "string"
      },
      "itemGroupsByItemType": {
        "type": "object",
        "additionalProperties": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/OrderItemGroupDTO"
          }
        }
      },
      "membershipType": {
        "type": "string",
        "enum": [
          "GUEST",
          "MEMBER"
        ]
      },
      "monthlyPayment": {
        "type": "number",
        "format": "double"
      },
      "orderBusinessChannel": {
        "type": "string"
      },
      "orderCanceledByAging": {
        "type": "boolean"
      },
      "orderDate": {
        "type": "string",
        "format": "date-time"
      },
      "orderExpiryTime": {
        "type": "string",
        "format": "date-time"
      },
      "orderId": {
        "type": "string"
      },
      "orderLogs": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/OrderLogDTO"
        }
      },
      "orderPaidEmailSent": {
        "type": "boolean"
      },
      "orderReceivedEmailSent": {
        "type": "boolean"
      },
      "orderStatus": {
        "type": "string",
        "enum": [
          "M",
          "C",
          "X",
          "D",
          "CR",
          "OS"
        ]
      },
      "payment": {
        "$ref": "#/definitions/PaymentDTO"
      },
      "paymentCategories": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/PaymentCategoryDTO"
        }
      },
      "providerExpiryTime": {
        "type": "string",
        "format": "date-time"
      },
      "providerPaymentProgress": {
        "type": "string",
        "enum": [
          "PENDING",
          "IN_PROGRESS",
          "SUCCESS",
          "FAILED",
          "FAILED_NO_RETRY"
        ]
      },
      "repay": {
        "type": "boolean"
      },
      "resendOrderApproved": {
        "type": "boolean"
      },
      "resendOrderRejected": {
        "type": "boolean"
      },
      "resendOrderRequested": {
        "type": "boolean"
      },
      "savedCardCategories": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/SavedCardCategoryDTO"
        }
      },
      "sendToXorder": {
        "type": "boolean"
      },
      "totalDiscount": {
        "type": "number",
        "format": "double"
      },
      "totalOrder": {
        "type": "number",
        "format": "double"
      },
      "totalOrderAdjustment": {
        "type": "number",
        "format": "double"
      },
      "totalOrderCashback": {
        "type": "number",
        "format": "double"
      },
      "uuid": {
        "type": "string"
      },
      "walletPaymentMethod": {
        "$ref": "#/definitions/WalletPaymentMethodDTO"
      }
    }
  },
  "UnApplyCouponCodeRequest": {
    "type": "object",
    "properties": {
      "couponId": {
        "type": "string"
      }
    }
  },
  "CartRevoResponse«PageOrderResponse»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "description": "Object value of response",
        "$ref": "#/definitions/PageOrderResponse"
      }
    }
  },
  "GetOrderResponse": {
    "type": "object",
    "properties": {
      "customer": {
        "$ref": "#/definitions/Customer"
      },
      "orderDate": {
        "type": "string",
        "format": "date-time"
      },
      "orderId": {
        "type": "string"
      },
      "orderItems": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/OrderItem"
        }
      },
      "orderStatus": {
        "type": "string",
        "enum": [
          "M",
          "C",
          "X",
          "D",
          "CR"
        ]
      },
      "payment": {
        "$ref": "#/definitions/Payment"
      }
    }
  },
  "HotelInformationDTO": {
    "type": "object",
    "properties": {
      "endPeriod": {
        "type": "string",
        "format": "date-time"
      },
      "message": {
        "type": "string"
      },
      "startPeriod": {
        "type": "string",
        "format": "date-time"
      }
    }
  },
  "CacheDeleteRequest": {
    "type": "object",
    "properties": {
      "pattern": {
        "type": "string"
      }
    }
  },
  "BaggageSSRDetailDTO": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "format": "double"
      },
      "code": {
        "type": "string"
      },
      "information": {
        "type": "string"
      },
      "legNo": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "throughBaggage": {
        "type": "boolean"
      }
    }
  },
  "MembershipTypeRequest": {
    "type": "object",
    "properties": {
      "membershipType": {
        "type": "string",
        "enum": [
          "GUEST",
          "MEMBER"
        ]
      }
    }
  },
  "OrderItem": {
    "type": "object",
    "properties": {
      "finalAmount": {
        "type": "number",
        "format": "double"
      },
      "itemName": {
        "type": "string"
      },
      "price": {
        "type": "number",
        "format": "double"
      },
      "quantity": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "CancelPolicyDTO": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "format": "double"
      },
      "from": {
        "type": "string"
      },
      "night": {
        "type": "integer",
        "format": "int32"
      },
      "percentage": {
        "type": "number",
        "format": "double"
      }
    }
  },
  "CustomerBookingRequest": {
    "type": "object",
    "properties": {
      "commentBy": {
        "type": "string"
      },
      "commentDate": {
        "type": "string",
        "format": "date-time"
      },
      "commentDesc": {
        "type": "string"
      },
      "commentType": {
        "type": "string"
      }
    }
  },
  "SavedCardOptionDTO": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string"
      },
      "dynamicCard": {
        "type": "boolean"
      },
      "name": {
        "type": "string"
      },
      "paymentMethods": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/PaymentInfoDTO"
        }
      }
    }
  },
  "CartRevoResponse«InstallmentSchemaResponse»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "description": "Object value of response",
        "$ref": "#/definitions/InstallmentSchemaResponse"
      }
    }
  },
  "PaymentRequiredDataDTO": {
    "type": "object",
    "properties": {
      "key": {
        "type": "string"
      },
      "placeholder": {
        "type": "string"
      },
      "sequence": {
        "type": "integer",
        "format": "int32"
      },
      "validationRegex": {
        "type": "string"
      },
      "validationTnc": {
        "type": "string"
      },
      "value": {
        "type": "string"
      }
    }
  },
  "WalletPaymentMethodDTO": {
    "type": "object",
    "properties": {
      "alias": {
        "type": "string"
      },
      "balance": {
        "type": "integer",
        "format": "int64"
      },
      "description": {
        "type": "string"
      },
      "disabled": {
        "type": "boolean"
      },
      "errorMessage": {
        "type": "string"
      },
      "id": {
        "type": "string"
      },
      "paymentCategory": {
        "$ref": "#/definitions/PaymentCategoryDTO"
      },
      "paymentEngine": {
        "type": "string"
      },
      "paymentMethod": {
        "type": "string"
      },
      "remainingAmount": {
        "type": "integer",
        "format": "int64"
      },
      "sequence": {
        "type": "integer",
        "format": "int32"
      },
      "tnc": {
        "type": "string"
      }
    }
  },
  "PaymentXHotelDTO": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "format": "double"
      },
      "billingAddress": {
        "$ref": "#/definitions/AddressXHotelDTO"
      },
      "billingName": {
        "type": "string"
      },
      "confirmationNumber": {
        "type": "string"
      },
      "extendedData": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "extendedExpiryDate": {
        "type": "string",
        "format": "date-time"
      },
      "handlingFee": {
        "type": "number",
        "format": "double"
      },
      "installmentMonths": {
        "type": "string"
      },
      "installmentRate": {
        "type": "string"
      },
      "internetBankingId": {
        "type": "string"
      },
      "internetBankingRefId": {
        "type": "string"
      },
      "monthlyPayment": {
        "type": "string"
      },
      "paymentBackendInfo": {
        "$ref": "#/definitions/PaymentInfoXHotelDTO"
      },
      "paymentConfirmation": {
        "type": "string"
      },
      "paymentDate": {
        "type": "string",
        "format": "date-time"
      },
      "paymentId": {
        "type": "string"
      },
      "paymentInfo": {
        "$ref": "#/definitions/PaymentInfoXHotelDTO"
      },
      "paymentInfoKeyBeforeFreePayment": {
        "$ref": "#/definitions/PaymentInfoKeyDTO"
      },
      "paymentMethodBeforeFreePayment": {
        "type": "string"
      },
      "paymentStatus": {
        "type": "string"
      },
      "referenceId": {
        "type": "string"
      },
      "virtualAccountNumber": {
        "type": "string"
      }
    }
  },
  "PaymentCategoryDTO": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "paymentMethodLabel": {
        "type": "string"
      },
      "paymentOptionLabel": {
        "type": "string"
      },
      "paymentOptions": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/PaymentOptionDTO"
        }
      },
      "sequence": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "OrdersCount": {
    "type": "object",
    "properties": {
      "past": {
        "type": "integer",
        "format": "int32"
      },
      "upcoming": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "CustomerAddressDTO": {
    "type": "object",
    "properties": {
      "addressLine": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "country": {
        "type": "string"
      },
      "postalCode": {
        "type": "string"
      },
      "state": {
        "type": "string"
      }
    }
  },
  "PaymentOptionDTO": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string"
      },
      "dynamicCard": {
        "type": "boolean"
      },
      "name": {
        "type": "string"
      },
      "paymentMethods": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/PaymentInfoDTO"
        }
      },
      "sequence": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "CheckOrderPaymentResponse": {
    "type": "object",
    "properties": {
      "itemType": {
        "type": "string"
      },
      "paymentValidation": {
        "type": "boolean"
      },
      "uuid": {
        "type": "string"
      }
    }
  },
  "BookingLogDTO": {
    "type": "object",
    "properties": {
      "createdDate": {
        "type": "string",
        "format": "date-time"
      },
      "sourceStatus": {
        "type": "string",
        "enum": [
          "BOOKING_PROCESSING",
          "BOOKING_FAILED",
          "BOOKED",
          "CONFIRM_PROCESSING",
          "CONFIRM_FAILED",
          "CONFIRMED",
          "CANCEL_BOOKING",
          "AMEND_BOOK"
        ]
      },
      "targetStatus": {
        "type": "string",
        "enum": [
          "BOOKING_PROCESSING",
          "BOOKING_FAILED",
          "BOOKED",
          "CONFIRM_PROCESSING",
          "CONFIRM_FAILED",
          "CONFIRMED",
          "CANCEL_BOOKING",
          "AMEND_BOOK"
        ]
      }
    }
  },
  "CartItemGroupDTO": {
    "type": "object",
    "properties": {
      "acquiredPoint": {
        "type": "number",
        "format": "double"
      },
      "itemType": {
        "type": "string",
        "enum": [
          "FLIGHT",
          "RAIL",
          "HOTEL"
        ]
      },
      "totalDiscount": {
        "type": "number",
        "format": "double"
      },
      "totalHandlingFee": {
        "type": "number",
        "format": "double"
      },
      "totalOrderItemGroup": {
        "type": "number",
        "format": "double"
      },
      "totalOrderItemGroupAdjustment": {
        "type": "number",
        "format": "double"
      },
      "totalOrderItemGroupCashback": {
        "type": "number",
        "format": "double"
      }
    }
  },
  "OrderLogDTO": {
    "type": "object",
    "properties": {
      "createdBy": {
        "type": "string"
      },
      "createdDate": {
        "type": "string",
        "format": "date-time"
      },
      "sourceStatus": {
        "type": "string",
        "enum": [
          "M",
          "C",
          "X",
          "D",
          "CR",
          "OS"
        ]
      },
      "targetStatus": {
        "type": "string",
        "enum": [
          "M",
          "C",
          "X",
          "D",
          "CR",
          "OS"
        ]
      }
    }
  },
  "ContactDTO": {
    "type": "object",
    "properties": {
      "email": {
        "type": "string"
      },
      "firstName": {
        "type": "string"
      },
      "fullName": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "phoneNumber": {
        "type": "string"
      },
      "title": {
        "type": "string",
        "enum": [
          "Mr",
          "Mrs",
          "Ms",
          "Mstr",
          "Miss"
        ]
      }
    }
  },
  "CreateInsuranceResponse": {
    "type": "object",
    "properties": {
      "insuranceId": {
        "type": "string"
      },
      "status": {
        "type": "string",
        "enum": [
          "PENDING",
          "ISSUING",
          "ISSUED",
          "FAILED"
        ]
      }
    }
  },
  "CartRevoResponse«DoPaymentResponse»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "description": "Object value of response",
        "$ref": "#/definitions/DoPaymentResponse"
      }
    }
  },
  "SyncOrderRequest": {
    "type": "object",
    "properties": {
      "appliedCouponAndValue": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/AppliedCouponAndValueDTO"
        }
      },
      "appliedPromoCodeAndValue": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/AppliedPromoCodeAndValueDTO"
        }
      },
      "businessChannel": {
        "type": "string"
      },
      "cartId": {
        "type": "string"
      },
      "customer": {
        "$ref": "#/definitions/CustomerXHotelDTO"
      },
      "hotelDataDetail": {
        "$ref": "#/definitions/SyncOrderDetailDTO"
      },
      "ipAddress": {
        "type": "string"
      },
      "membershipType": {
        "type": "string",
        "enum": [
          "GUEST",
          "MEMBER"
        ]
      },
      "orderCanceledByAging": {
        "type": "boolean"
      },
      "orderDate": {
        "type": "string",
        "format": "date-time"
      },
      "orderId": {
        "type": "string"
      },
      "orderPaidEmailSent": {
        "type": "boolean"
      },
      "orderReceivedEmailSent": {
        "type": "boolean"
      },
      "orderStatus": {
        "type": "string",
        "enum": [
          "M",
          "C",
          "X",
          "D",
          "CR",
          "OS"
        ]
      },
      "payment": {
        "$ref": "#/definitions/PaymentXHotelDTO"
      },
      "repayable": {
        "type": "boolean"
      },
      "resendOrderApproved": {
        "type": "boolean"
      },
      "resendOrderRejected": {
        "type": "boolean"
      },
      "resendOrderRequested": {
        "type": "boolean"
      },
      "sendToXorder": {
        "type": "boolean"
      },
      "totalAcquiredPointLoyalty": {
        "type": "number",
        "format": "double"
      },
      "totalOrder": {
        "type": "number",
        "format": "double"
      },
      "totalOrderAdjustment": {
        "type": "number",
        "format": "double"
      }
    }
  },
  "SyncOrderDetailDTO": {
    "type": "object",
    "properties": {
      "acquiredPointLoyalty": {
        "type": "number",
        "format": "double"
      },
      "bedBank": {
        "$ref": "#/definitions/BedBankXHotelDTO"
      },
      "bedBankHotelAreaCode": {
        "type": "string"
      },
      "bedBankHotelCode": {
        "type": "string"
      },
      "cancelReservationData": {
        "$ref": "#/definitions/CancelReservationDataDTO"
      },
      "code": {
        "type": "string"
      },
      "customerBookingRequest": {
        "$ref": "#/definitions/CustomerBookingRequest"
      },
      "diffNetPrice": {
        "type": "number",
        "format": "double"
      },
      "hotelBookingStatus": {
        "type": "string",
        "enum": [
          "PENDING_BOOKING",
          "CONFIRM_BOOK",
          "REQUEST_CANCEL",
          "CANCEL_BOOKING",
          "FAILED_BOOKING",
          "AMEND_BOOK",
          "NOT_BOOKED"
        ]
      },
      "hotelImage": {
        "type": "string"
      },
      "location": {
        "$ref": "#/definitions/LocationXHotelDTO"
      },
      "name": {
        "type": "string"
      },
      "numOfRooms": {
        "type": "integer",
        "format": "int32"
      },
      "orderItemId": {
        "type": "string"
      },
      "period": {
        "$ref": "#/definitions/PeriodXHotelDTO"
      },
      "reconcileStatus": {
        "type": "string",
        "enum": [
          "ORDER_SETTLE",
          "NOT_SETTLED",
          "RECONCILE_FAIL"
        ]
      },
      "reservationNo": {
        "type": "string"
      },
      "roomCategory": {
        "$ref": "#/definitions/SyncRoomCategoryDTO"
      },
      "starRating": {
        "type": "number",
        "format": "double"
      },
      "totalListPrice": {
        "type": "number",
        "format": "double"
      },
      "totalNettPrice": {
        "type": "number",
        "format": "double"
      },
      "totalOfferPrice": {
        "type": "number",
        "format": "double"
      },
      "totalRoomAdjustment": {
        "type": "number",
        "format": "double"
      },
      "transactionStatus": {
        "type": "string",
        "enum": [
          "NOT_ENOUGH_AVAILABLE_ROOM",
          "PRICE_CHANGE_DURING_BOOKING",
          "UNSPECIFIED_ERROR",
          "SUCCESS_BOOKING"
        ]
      }
    }
  },
  "AddressDTO": {
    "type": "object",
    "properties": {
      "address": {
        "type": "string"
      },
      "city": {
        "type": "string"
      },
      "country": {
        "type": "string"
      },
      "district": {
        "type": "string"
      },
      "emailAddress": {
        "type": "string"
      },
      "firstname": {
        "type": "string"
      },
      "geoAddress": {
        "type": "string"
      },
      "geoLocationProvided": {
        "type": "boolean"
      },
      "label": {
        "type": "string"
      },
      "lastname": {
        "type": "string"
      },
      "latitude": {
        "type": "number",
        "format": "double"
      },
      "longitude": {
        "type": "number",
        "format": "double"
      },
      "mobilePhone": {
        "type": "string"
      },
      "phoneNumber": {
        "type": "string"
      },
      "postalCode": {
        "type": "string"
      },
      "state": {
        "type": "string"
      },
      "subdistrict": {
        "type": "string"
      }
    }
  },
  "UnApplyPromoCodeRequest": {
    "type": "object",
    "properties": {
      "promoCode": {
        "type": "string"
      }
    }
  },
  "CartItemRequest": {
    "type": "object",
    "properties": {
      "itemType": {
        "type": "string",
        "enum": [
          "FLIGHT",
          "RAIL",
          "HOTEL"
        ]
      },
      "key": {
        "type": "string"
      }
    }
  },
  "Payment": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "format": "double"
      },
      "extendedData": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "paymentId": {
        "type": "string"
      },
      "paymentInfo": {
        "$ref": "#/definitions/PaymentInfo"
      }
    }
  },
  "CartRevoResponse«PaymentApprovalResponse»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "description": "Object value of response",
        "$ref": "#/definitions/PaymentApprovalResponse"
      }
    }
  },
  "PeriodXHotelDTO": {
    "type": "object",
    "properties": {
      "checkIn": {
        "type": "string",
        "format": "date-time"
      },
      "checkOut": {
        "type": "string",
        "format": "date-time"
      },
      "shiftDays": {
        "type": "integer",
        "format": "int32"
      }
    }
  },
  "CartRevoResponse«OrderResponse»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "description": "Object value of response",
        "$ref": "#/definitions/OrderResponse"
      }
    }
  },
  "CartBookResponse": {
    "type": "object",
    "properties": {
      "bookingStatus": {
        "type": "string",
        "enum": [
          "BOOKING_PROCESSING",
          "BOOKING_FAILED",
          "BOOKED",
          "CONFIRM_PROCESSING",
          "CONFIRM_FAILED",
          "CONFIRMED",
          "CANCEL_BOOKING",
          "AMEND_BOOK"
        ]
      },
      "cartId": {
        "type": "string"
      },
      "orderId": {
        "type": "string"
      },
      "orderStatus": {
        "type": "string",
        "enum": [
          "M",
          "C",
          "X",
          "D",
          "CR",
          "OS"
        ]
      },
      "uuid": {
        "type": "string"
      }
    }
  },
  "CustomerDTO": {
    "type": "object",
    "properties": {
      "customerAddress": {
        "$ref": "#/definitions/CustomerAddressDTO"
      },
      "customerId": {
        "type": "string"
      },
      "customerLogonId": {
        "type": "string"
      },
      "email": {
        "type": "string"
      },
      "enableToken": {
        "type": "boolean"
      },
      "firstName": {
        "type": "string"
      },
      "fullOrLegalName": {
        "type": "string"
      },
      "gender": {
        "type": "string"
      },
      "lastName": {
        "type": "string"
      },
      "phoneNumber": {
        "type": "string"
      }
    }
  },
  "AppliedCouponAndValueDTO": {
    "type": "object",
    "properties": {
      "adjustmentId": {
        "type": "string"
      },
      "couponCode": {
        "type": "string"
      },
      "couponEndDateTime": {
        "type": "string",
        "format": "date-time"
      },
      "couponStartDateTime": {
        "type": "string",
        "format": "date-time"
      },
      "couponStatus": {
        "type": "string",
        "enum": [
          "VALID",
          "USED",
          "EXPIRED",
          "INVALID",
          "REDEEM"
        ]
      },
      "id": {
        "type": "string"
      },
      "rewardType": {
        "type": "string"
      },
      "value": {
        "type": "integer",
        "format": "int64"
      }
    }
  },
  "BoardXHotelDTO": {
    "type": "object",
    "properties": {
      "boardCode": {
        "type": "string"
      },
      "boardName": {
        "type": "string"
      }
    }
  },
  "ChangePaymentRequest": {
    "type": "object",
    "properties": {
      "extendedData": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "paymentEngine": {
        "type": "string"
      },
      "paymentMethod": {
        "type": "string"
      }
    }
  },
  "InsuranceDTO": {
    "type": "object",
    "properties": {
      "deposit": {
        "type": "boolean"
      },
      "id": {
        "type": "string"
      },
      "merchantCode": {
        "type": "string"
      },
      "merchantType": {
        "type": "string"
      },
      "providerCode": {
        "type": "string"
      },
      "status": {
        "type": "string"
      },
      "total": {
        "type": "number",
        "format": "double"
      }
    }
  },
  "PdfResponse": {
    "type": "object",
    "properties": {
      "byteString": {
        "type": "string"
      },
      "fileName": {
        "type": "string"
      },
      "orderId": {
        "type": "string"
      }
    }
  },
  "CartRevoResponse«boolean»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "type": "boolean",
        "example": false,
        "description": "Object value of response"
      }
    }
  },
  "CartResponse": {
    "type": "object",
    "properties": {
      "acquiredPoint": {
        "type": "number",
        "format": "double"
      },
      "businessChannel": {
        "type": "string"
      },
      "cartId": {
        "type": "string"
      },
      "contact": {
        "$ref": "#/definitions/ContactDTO"
      },
      "customer": {
        "$ref": "#/definitions/CustomerDTO"
      },
      "insurance": {
        "$ref": "#/definitions/InsuranceDetailDTO"
      },
      "itemGroupsByItemType": {
        "type": "object",
        "additionalProperties": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/CartItemGroupDTO"
          }
        }
      },
      "membershipType": {
        "type": "string",
        "enum": [
          "GUEST",
          "MEMBER"
        ]
      },
      "totalDiscount": {
        "type": "number",
        "format": "double"
      },
      "totalOrder": {
        "type": "number",
        "format": "double"
      },
      "totalOrderAdjustment": {
        "type": "number",
        "format": "double"
      },
      "totalOrderCashback": {
        "type": "number",
        "format": "double"
      },
      "travellers": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/TravellerDTO"
        }
      }
    }
  },
  "InstallmentSchemaResponse": {
    "type": "object",
    "properties": {
      "installmentSchemas": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/InstallmentSchemaDTO"
        }
      }
    }
  },
  "TransactionInfoDTO": {
    "type": "object",
    "properties": {
      "extendedData": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "notificationDate": {
        "type": "string",
        "format": "date-time"
      },
      "transactionDate": {
        "type": "string",
        "format": "date-time"
      },
      "transactionId": {
        "type": "string"
      }
    }
  },
  "ApplyPromoCodeRequest": {
    "type": "object",
    "properties": {
      "promoCode": {
        "type": "string"
      }
    }
  },
  "DoPaymentResponse": {
    "type": "object",
    "properties": {
      "cartId": {
        "type": "string"
      },
      "httpRequestMethod": {
        "type": "string"
      },
      "orderDate": {
        "type": "string",
        "format": "date-time"
      },
      "orderExpiryTime": {
        "type": "string",
        "format": "date-time"
      },
      "orderId": {
        "type": "string"
      },
      "paymentData": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "paymentEngine": {
        "type": "string"
      },
      "paymentMethod": {
        "type": "string"
      },
      "paymentPunchoutData": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "redirectUrl": {
        "type": "string"
      },
      "requestBody": {
        "type": "string"
      },
      "uuid": {
        "type": "string"
      }
    }
  },
  "SavedCardCategoryDTO": {
    "type": "object",
    "properties": {
      "cardNetwork": {
        "type": "string"
      },
      "lastUsed": {
        "type": "string",
        "format": "date-time"
      },
      "name": {
        "type": "string"
      },
      "paymentOptions": {
        "type": "array",
        "items": {
          "$ref": "#/definitions/SavedCardOptionDTO"
        }
      }
    }
  },
  "ApprovePaymentRequest": {
    "type": "object",
    "properties": {
      "extData": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "orderId": {
        "type": "string"
      },
      "paymentMethod": {
        "type": "string"
      },
      "uuid": {
        "type": "string"
      }
    }
  },
  "CancelReservationDataDTO": {
    "type": "object",
    "properties": {
      "appliedCancelPolicy": {
        "$ref": "#/definitions/CancelPolicyDTO"
      },
      "cancelResult": {
        "type": "boolean"
      },
      "cancellationDate": {
        "type": "string",
        "format": "date-time"
      },
      "cancellationReason": {
        "$ref": "#/definitions/OrderCommentDTO"
      }
    }
  },
  "CancelPolicyXHotelDTO": {
    "type": "object",
    "properties": {
      "cancelPolicyId": {
        "type": "string"
      },
      "chargeAmount": {
        "type": "number",
        "format": "double"
      },
      "currency": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "policyEndDate": {
        "type": "string",
        "format": "date-time"
      },
      "policyStartDate": {
        "type": "string",
        "format": "date-time"
      }
    }
  },
  "CartRevoResponse«CreateInsuranceResponse»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "description": "Object value of response",
        "$ref": "#/definitions/CreateInsuranceResponse"
      }
    }
  },
  "PaymentDTO": {
    "type": "object",
    "properties": {
      "extendedData": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        }
      },
      "paymentInfo": {
        "$ref": "#/definitions/PaymentInfoDTO"
      },
      "paymentPunchout": {
        "$ref": "#/definitions/PaymentPunchoutDTO"
      }
    }
  },
  "PaymentApprovalResponse": {
    "type": "object",
    "properties": {
      "orderUUID": {
        "type": "string"
      },
      "success": {
        "type": "boolean"
      }
    }
  },
  "CartRevoResponse«CartResponse»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "description": "Object value of response",
        "$ref": "#/definitions/CartResponse"
      }
    }
  },
  "SimpleListRequest«string»": {
    "type": "object",
    "properties": {
      "value": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "CartRevoResponse«List«InstallmentInfoResponse»»": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string",
        "description": "status code of response"
      },
      "errors": {
        "type": "object",
        "description": "list error (code not 200)",
        "additionalProperties": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "message": {
        "type": "string",
        "description": "message of response"
      },
      "success": {
        "type": "boolean"
      },
      "value": {
        "type": "array",
        "description": "Object value of response",
        "items": {
          "$ref": "#/definitions/InstallmentInfoResponse"
        }
      }
    }
  },
  "BedBankAdditionalDataDTO": {
    "type": "object",
    "properties": {
      "available": {
        "type": "boolean"
      },
      "internalCode": {
        "type": "string"
      },
      "rateCommentsId": {
        "type": "string"
      },
      "rateType": {
        "type": "string"
      }
    }
  },
  "AppliedPromoCodeAndValueDTO": {
    "type": "object",
    "properties": {
      "promoCode": {
        "type": "string"
      },
      "promoGroup": {
        "type": "string"
      },
      "promoName": {
        "type": "string"
      },
      "rewardType": {
        "type": "string"
      },
      "value": {
        "type": "integer",
        "format": "int64"
      }
    }
  }
}

const paths = {
  "/api/cache-util": {
    "delete": {
      "tags": [
        "cache-util-controller"
      ],
      "summary": "deleteCacheByPattern",
      "operationId": "deleteCacheByPatternUsingDELETE",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/CacheDeleteRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "204": {
          "description": "No Content"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        }
      }
    }
  },
  "/api/cart/merge": {
    "put": {
      "tags": [
        "cart-controller"
      ],
      "summary": "Merge Cart",
      "description": "Merge Cart",
      "operationId": "mergeCartUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "cartMergeRequest",
          "description": "cartMergeRequest",
          "required": true,
          "schema": {
            "$ref": "#/definitions/CartMergeRequest"
          }
        },
        {
          "name": "itemType",
          "in": "query",
          "description": "itemType",
          "required": false,
          "type": "string",
          "default": "FLIGHT",
          "enum": [
            "FLIGHT",
            "RAIL",
            "HOTEL"
          ]
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«CartResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/cart/resendEmailConfirmation": {
    "post": {
      "tags": [
        "message-controller"
      ],
      "summary": "Resend ticket",
      "description": "Resend ticket to customer",
      "operationId": "resendOrderEmailConfirmationUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ResendTicketRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/cart/{cartId}": {
    "get": {
      "tags": [
        "cart-controller"
      ],
      "summary": "Get cart detail",
      "description": "get cart detail",
      "operationId": "getCartUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "cartId",
          "in": "path",
          "description": "cartId",
          "required": true,
          "type": "string"
        },
        {
          "name": "itemType",
          "in": "query",
          "description": "itemType",
          "required": false,
          "type": "string",
          "default": "FLIGHT",
          "enum": [
            "FLIGHT",
            "RAIL",
            "HOTEL"
          ]
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«CartResponse»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/cart/{cartId}/book": {
    "post": {
      "tags": [
        "cart-controller"
      ],
      "summary": "Book Cart",
      "description": "Book Cart",
      "operationId": "bookCartUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "cartId",
          "in": "path",
          "description": "cartId",
          "required": true,
          "type": "string"
        },
        {
          "name": "itemType",
          "in": "query",
          "description": "itemType",
          "required": false,
          "type": "string",
          "default": "FLIGHT",
          "enum": [
            "FLIGHT",
            "RAIL",
            "HOTEL"
          ]
        },
        {
          "name": "language",
          "in": "query",
          "description": "language",
          "required": false,
          "type": "string"
        },
        {
          "name": "customerIp",
          "in": "query",
          "description": "customerIp",
          "required": false,
          "type": "string"
        },
        {
          "name": "userAgent",
          "in": "query",
          "description": "userAgent",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«CartBookResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/cart/{cartId}/checkout": {
    "post": {
      "tags": [
        "cart-controller"
      ],
      "summary": "Checkout Cart",
      "description": "Checkout Cart",
      "operationId": "checkoutCartUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "cartId",
          "in": "path",
          "description": "cartId",
          "required": true,
          "type": "string"
        },
        {
          "name": "itemType",
          "in": "query",
          "description": "itemType",
          "required": false,
          "type": "string",
          "default": "FLIGHT",
          "enum": [
            "FLIGHT",
            "RAIL",
            "HOTEL"
          ]
        },
        {
          "name": "language",
          "in": "query",
          "description": "language",
          "required": false,
          "type": "string",
          "default": "id"
        },
        {
          "name": "formVersion",
          "in": "query",
          "description": "formVersion",
          "required": false,
          "type": "string",
          "default": "1"
        },
        {
          "in": "body",
          "name": "membershipTypeRequest",
          "description": "membershipTypeRequest",
          "required": true,
          "schema": {
            "$ref": "#/definitions/MembershipTypeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«CartResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/cart/{cartId}/item": {
    "put": {
      "tags": [
        "cart-controller"
      ],
      "summary": "add to Cart",
      "description": "add to Cart",
      "operationId": "addCartUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "cartId",
          "in": "path",
          "description": "cartId",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "cartAddItemRequest",
          "description": "cartAddItemRequest",
          "required": true,
          "schema": {
            "$ref": "#/definitions/CartAddItemRequest"
          }
        },
        {
          "name": "itemType",
          "in": "query",
          "description": "itemType",
          "required": false,
          "type": "string",
          "default": "FLIGHT",
          "enum": [
            "FLIGHT",
            "RAIL",
            "HOTEL"
          ]
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«CartResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/cart/{cartId}/item/passenger": {
    "put": {
      "tags": [
        "cart-controller"
      ],
      "summary": "Set Passenger",
      "description": "Set Passenger",
      "operationId": "setPassengerUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "cartId",
          "in": "path",
          "description": "cartId",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "cartPassengerRequest",
          "description": "cartPassengerRequest",
          "required": true,
          "schema": {
            "$ref": "#/definitions/CartPassengerRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«CartResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/hotelOrder/_sync": {
    "post": {
      "tags": [
        "order-synchronize-controller"
      ],
      "summary": "Update Hotel Order",
      "description": "update hotel order from X-Hotel",
      "operationId": "syncOrderUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "hotelOrderRequest",
          "description": "hotelOrderRequest",
          "required": true,
          "schema": {
            "$ref": "#/definitions/SyncOrderRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/idv/updateCRStatus/{orderId}": {
    "put": {
      "tags": [
        "idv-controller"
      ],
      "summary": "Update CR Status",
      "description": "Update CR Status",
      "operationId": "updateCRStatusUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/UpdateCRStatusRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order": {
    "get": {
      "tags": [
        "order-filter-controller"
      ],
      "summary": "Get Order by Params",
      "description": "Get Order by Params",
      "operationId": "getOrderByFilterUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "passengerName",
          "in": "query",
          "required": false,
          "type": "string"
        },
        {
          "name": "orderId",
          "in": "query",
          "required": false,
          "type": "string"
        },
        {
          "name": "customerLogonId",
          "in": "query",
          "required": false,
          "type": "string"
        },
        {
          "name": "phoneNumber",
          "in": "query",
          "required": false,
          "type": "string"
        },
        {
          "name": "orderStatus",
          "in": "query",
          "required": false,
          "type": "string"
        },
        {
          "name": "orderItemId",
          "in": "query",
          "required": false,
          "type": "string"
        },
        {
          "name": "uuid",
          "in": "query",
          "required": false,
          "type": "string"
        },
        {
          "name": "bookingCode",
          "in": "query",
          "required": false,
          "type": "string"
        },
        {
          "name": "providerReferenceCode",
          "in": "query",
          "required": false,
          "type": "string"
        },
        {
          "name": "itemTypes",
          "in": "query",
          "required": false,
          "type": "string",
          "enum": [
            "FLIGHT",
            "RAIL",
            "HOTEL"
          ]
        },
        {
          "name": "hotelOrderItemId",
          "in": "query",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«List«OrderResponse»»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/approved": {
    "get": {
      "tags": [
        "order-filter-controller"
      ],
      "summary": "Get Order Approved",
      "description": "Get Order Approved",
      "operationId": "getOrderApprovedUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "customerLogonId",
          "in": "query",
          "description": "customerLogonId",
          "required": true,
          "type": "string"
        },
        {
          "name": "itemType",
          "in": "query",
          "description": "itemType",
          "required": false,
          "type": "string",
          "default": "FLIGHT",
          "enum": [
            "FLIGHT",
            "RAIL",
            "HOTEL"
          ]
        },
        {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«PageOrderResponse»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/cancel/approved": {
    "post": {
      "tags": [
        "scheduler-job-controller"
      ],
      "summary": "Cancel Order Approved",
      "description": "Cancel Order Approved",
      "operationId": "cancelOrderApprovedUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/cancel/hotel": {
    "post": {
      "tags": [
        "order-cancel-controller"
      ],
      "summary": "Cancel Hotel Order",
      "description": "Cancel Hotel Order",
      "operationId": "cancelHotelOrderUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/HotelOrderCancelRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/cancel/pending": {
    "post": {
      "tags": [
        "scheduler-job-controller"
      ],
      "summary": "Cancel Order Pending",
      "description": "Cancel Order Pending",
      "operationId": "cancelOrderPendingUsingPOST_1",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/cancel/pending/orderIds": {
    "post": {
      "tags": [
        "order-cancel-controller"
      ],
      "summary": "Cancel Order Pending by OrderIds",
      "description": "Cancel Order Pending by OrderIds",
      "operationId": "cancelOrderPendingByOrderIdsUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "orderIds",
          "description": "orderIds",
          "required": true,
          "schema": {
            "$ref": "#/definitions/SimpleListRequest«string»"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/cancel/pending/uuids": {
    "post": {
      "tags": [
        "order-cancel-controller"
      ],
      "summary": "Cancel Order Pending by Uuids",
      "description": "Cancel Order Pending by Uuids",
      "operationId": "cancelOrderPendingByUuidsUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "uuids",
          "description": "uuids",
          "required": true,
          "schema": {
            "$ref": "#/definitions/SimpleListRequest«string»"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/cancelled": {
    "get": {
      "tags": [
        "order-filter-controller"
      ],
      "summary": "Get Order Cancelled",
      "description": "Get Order Cancelled",
      "operationId": "getOrderCancelledUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "customerLogonId",
          "in": "query",
          "description": "customerLogonId",
          "required": true,
          "type": "string"
        },
        {
          "name": "itemType",
          "in": "query",
          "description": "itemType",
          "required": false,
          "type": "string",
          "default": "FLIGHT",
          "enum": [
            "FLIGHT",
            "RAIL",
            "HOTEL"
          ]
        },
        {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«PageOrderResponse»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/count": {
    "get": {
      "tags": [
        "order-controller"
      ],
      "summary": "Get Orders Count",
      "description": "Get Orders Count By The CartId",
      "operationId": "getOrdersCountByCartIdUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "cartId",
          "in": "query",
          "description": "cartId",
          "required": true,
          "type": "string"
        },
        {
          "name": "departureDate",
          "in": "query",
          "description": "departureDate",
          "required": true,
          "type": "string"
        },
        {
          "name": "departureTime",
          "in": "query",
          "description": "departureTime",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrdersCount»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/coupon/apply": {
    "put": {
      "tags": [
        "promotion-controller"
      ],
      "summary": "Apply coupon code by uuid",
      "description": "apply coupon code by uuid",
      "operationId": "applyCouponCodeByUuidUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "query",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ApplyCouponCodeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/coupon/unapply": {
    "put": {
      "tags": [
        "promotion-controller"
      ],
      "summary": "unApply coupon code by uuid",
      "description": "unapply coupon code by uuid",
      "operationId": "unapplyCouponCodeByUuidUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "query",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/UnApplyCouponCodeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/findById/{orderId}": {
    "get": {
      "tags": [
        "order-controller"
      ],
      "summary": "Get order detail by order id",
      "description": "Get order detail by order id",
      "operationId": "getOrderByOrderIdUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        },
        {
          "name": "storeId",
          "in": "header",
          "description": "storeId",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "requestId",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/GetOrderResponse"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/findByIdAndPaymentMethod": {
    "get": {
      "tags": [
        "order-controller"
      ],
      "summary": "Get order detail by order id and payment method",
      "description": "Get order detail by order id and payment method",
      "operationId": "getOrderByOrderIdAndPaymentMethodUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "query",
          "description": "orderId",
          "required": true,
          "type": "string"
        },
        {
          "name": "paymentMethod",
          "in": "query",
          "description": "paymentMethod",
          "required": true,
          "type": "string"
        },
        {
          "name": "storeId",
          "in": "header",
          "description": "storeId",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "requestId",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/GetOrderResponse"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/findByInternetBankingIdAndPaymentMethod": {
    "get": {
      "tags": [
        "order-controller"
      ],
      "summary": "Get order list",
      "description": "by internet banking id and payment method",
      "operationId": "getOrdersByInternetBankingIdAndPaymentMethodUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "internetBankingId",
          "in": "query",
          "description": "internetBankingId",
          "required": true,
          "type": "string"
        },
        {
          "name": "paymentMethod",
          "in": "query",
          "description": "paymentMethod",
          "required": true,
          "type": "string"
        },
        {
          "name": "storeId",
          "in": "header",
          "description": "storeId",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "requestId",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/GetOrderResponse"
            }
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/list/{orderType}": {
    "get": {
      "tags": [
        "order-filter-controller"
      ],
      "summary": "Get Flight Orders by the Status",
      "description": "Get Flight order by the cartId and the status",
      "operationId": "getOrdersByCartIdAndStatusUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderType",
          "in": "path",
          "description": "orderType",
          "required": true,
          "type": "string",
          "enum": [
            "PENDING",
            "APPROVED",
            "CANCELED"
          ]
        },
        {
          "name": "customerLogonId",
          "in": "query",
          "description": "customerLogonId",
          "required": true,
          "type": "string"
        },
        {
          "name": "sort",
          "in": "query",
          "description": "sort",
          "required": true,
          "type": "string",
          "enum": [
            "ASC",
            "DESC"
          ]
        },
        {
          "name": "departureDate",
          "in": "query",
          "description": "departureDate",
          "required": false,
          "type": "string"
        },
        {
          "name": "departureTime",
          "in": "query",
          "description": "departureTime",
          "required": false,
          "type": "string"
        },
        {
          "name": "upcomingOrders",
          "in": "query",
          "description": "upcomingOrders",
          "required": false,
          "type": "boolean"
        },
        {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«PageOrderResponse»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/pay": {
    "post": {
      "tags": [
        "order-controller"
      ],
      "summary": "Order Pay Order by UUID",
      "description": "Order Pay Order by UUID",
      "operationId": "payOrderByUuidUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "query",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/DoPaymentRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«DoPaymentResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/payment/change": {
    "post": {
      "tags": [
        "order-controller"
      ],
      "summary": "Change Payment by UUID",
      "description": "Change Payment by UUID",
      "operationId": "changePaymentByUuidUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "query",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ChangePaymentRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/payment/installment": {
    "get": {
      "tags": [
        "order-controller"
      ],
      "summary": "Get Installment Available by UUID",
      "description": "Installment Available by UUID",
      "operationId": "getInstallmentPaymentByUuidUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "query",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "name": "paymentMethod",
          "in": "query",
          "description": "paymentMethod",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«InstallmentSchemaResponse»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/payment/validInstallment": {
    "get": {
      "tags": [
        "order-controller"
      ],
      "summary": "Get Installment Available by UUID",
      "description": "Installment Available by UUID",
      "operationId": "getValidInstallmentPaymentByUuidUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "query",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "name": "paymentMethod",
          "in": "query",
          "description": "paymentMethod",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«List«InstallmentInfoResponse»»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/pending": {
    "get": {
      "tags": [
        "order-filter-controller"
      ],
      "summary": "Get Order Pending",
      "description": "Get Order Pending",
      "operationId": "getOrderPendingUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "customerLogonId",
          "in": "query",
          "description": "customerLogonId",
          "required": true,
          "type": "string"
        },
        {
          "name": "itemType",
          "in": "query",
          "description": "itemType",
          "required": false,
          "type": "string",
          "default": "FLIGHT",
          "enum": [
            "FLIGHT",
            "RAIL",
            "HOTEL"
          ]
        },
        {
          "name": "page",
          "in": "query",
          "description": "page",
          "required": true,
          "type": "integer",
          "format": "int32"
        },
        {
          "name": "size",
          "in": "query",
          "description": "size",
          "required": true,
          "type": "integer",
          "format": "int32"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«PageOrderResponse»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/pendingOrdersByIdList": {
    "post": {
      "tags": [
        "order-controller"
      ],
      "summary": "Get Pending Order Detail by List of OrderIds for hotel",
      "description": "Get Pending Order Detail By List of OrderIds for hotel",
      "operationId": "getPendingOrderByOrderIdsUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "orderIds",
          "description": "orderIds",
          "required": true,
          "schema": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«List«OrderResponse»»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/promo/apply": {
    "put": {
      "tags": [
        "promotion-controller"
      ],
      "summary": "Apply promo code by uuid",
      "description": "apply promo code by uuid",
      "operationId": "applyPromoCodeByUuidUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "query",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ApplyPromoCodeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/promo/unapply": {
    "put": {
      "tags": [
        "promotion-controller"
      ],
      "summary": "Unapply promo code by uuid",
      "description": "unapply promo code by uuid",
      "operationId": "unapplyPromoCodeByUuidUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "query",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/UnApplyPromoCodeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/publishLoyaltyAndReview": {
    "post": {
      "tags": [
        "scheduler-job-controller"
      ],
      "summary": "Publish Loyalty Point and Send Review Email",
      "description": "Publish Loyalty Point and Send Review Email for Confirmed Order",
      "operationId": "publishLoyaltyAndReviewUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/reconciliationReport": {
    "post": {
      "tags": [
        "scheduler-job-controller"
      ],
      "summary": "sendFlightCancelReport",
      "operationId": "sendFlightCancelReportUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "reconciliationReportRequest",
          "description": "reconciliationReportRequest",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ReconciliationReportRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/reissue": {
    "post": {
      "tags": [
        "scheduler-job-controller"
      ],
      "summary": "Reissue Flight Orders",
      "description": "Reissue Flight Orders On Hold",
      "operationId": "reissueFlightUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/reissue/hotel": {
    "post": {
      "tags": [
        "scheduler-job-controller"
      ],
      "summary": "Reissue Hotel Orders",
      "description": "Reissue Hotel Orders On hold",
      "operationId": "reissueHotelUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/republishSendToXOrder": {
    "post": {
      "tags": [
        "order-controller"
      ],
      "summary": "Order Republish Send to X-Order",
      "description": "Order Republish Send to X-Order",
      "operationId": "republishSendToXOrderUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "orderIds",
          "description": "orderIds",
          "required": true,
          "schema": {
            "$ref": "#/definitions/SimpleListRequest«string»"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/sendToTravelOrder": {
    "post": {
      "tags": [
        "scheduler-job-controller"
      ],
      "summary": "Send Order to Travel Order",
      "description": "Send Qualified Order to cart revo MQ",
      "operationId": "sendToTravelOrderUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/uuid": {
    "get": {
      "tags": [
        "order-controller"
      ],
      "summary": "Get Order Detail by UUID",
      "description": "Get Order Detail by UUID",
      "operationId": "getOrderByUuidUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "query",
          "description": "uuid",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderId}": {
    "get": {
      "tags": [
        "order-controller"
      ],
      "summary": "Get Order Detail by OrderId",
      "description": "Get Order Detail by OrderId",
      "operationId": "getOrderByOrderIdUsingGET_1",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderId}/coupon/apply": {
    "put": {
      "tags": [
        "promotion-controller"
      ],
      "summary": "Apply coupon code by order id",
      "description": "apply coupon code by order id",
      "operationId": "applyCouponCodeByOrderIdUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ApplyCouponCodeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderId}/coupon/unapply": {
    "put": {
      "tags": [
        "promotion-controller"
      ],
      "summary": "unApply coupon code by order id",
      "description": "unapply coupon code by order id",
      "operationId": "unapplyCouponCodeByOrderIdUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/UnApplyCouponCodeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderId}/insurance": {
    "post": {
      "tags": [
        "order-controller"
      ],
      "summary": "Create Insurance",
      "description": "Create Insurance",
      "operationId": "createInsuranceUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«CreateInsuranceResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    },
    "put": {
      "tags": [
        "order-controller"
      ],
      "summary": "Update Order Insurance Data",
      "description": "Update Order Insurance Data",
      "operationId": "updateOrderInsuranceDataUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        },
        {
          "name": "insuranceId",
          "in": "query",
          "description": "insuranceId",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderId}/pay": {
    "post": {
      "tags": [
        "order-controller"
      ],
      "summary": "Order Pay Order by Order Id",
      "description": "Order Pay Order by Order Id",
      "operationId": "payOrderByOrderIdUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/DoPaymentRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«DoPaymentResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderId}/payment/change": {
    "post": {
      "tags": [
        "order-controller"
      ],
      "summary": "Change Payment by orderId",
      "description": "Change Payment by orderId",
      "operationId": "changePaymentByOrderIdUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ChangePaymentRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderId}/payment/installment": {
    "get": {
      "tags": [
        "order-controller"
      ],
      "summary": "Get Installment Available by Order Id",
      "description": "Installment Available by Order Id",
      "operationId": "getInstallmentPaymentByOrderIdUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        },
        {
          "name": "paymentMethod",
          "in": "query",
          "description": "paymentMethod",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«InstallmentSchemaResponse»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderId}/payment/validInstallment": {
    "get": {
      "tags": [
        "order-controller"
      ],
      "summary": "Get Installment Available by Order Id",
      "description": "Installment Available by Order Id",
      "operationId": "getValidInstallmentPaymentByOrderIdUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        },
        {
          "name": "paymentMethod",
          "in": "query",
          "description": "paymentMethod",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«List«InstallmentInfoResponse»»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderId}/promo/apply": {
    "put": {
      "tags": [
        "promotion-controller"
      ],
      "summary": "Apply promo code by order id",
      "description": "apply promo code by order id",
      "operationId": "applyPromoCodeByOrderIdUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ApplyPromoCodeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderId}/promo/unapply": {
    "put": {
      "tags": [
        "promotion-controller"
      ],
      "summary": "Unapply promo code by order id",
      "description": "unapply promo code by order id",
      "operationId": "unapplyPromoCodeByOrderIdUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/UnApplyPromoCodeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderId}/reissue": {
    "post": {
      "tags": [
        "order-controller"
      ],
      "summary": "Order Reissue",
      "description": "Order Reissue",
      "operationId": "reissueOrderUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderId}/reissue/insurance": {
    "post": {
      "tags": [
        "order-controller"
      ],
      "summary": "Insurance Reissue",
      "description": "Insurance Reissue",
      "operationId": "reissueInsuranceUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderId}/resendToXOrder": {
    "post": {
      "tags": [
        "order-controller"
      ],
      "summary": "Order Resend to xOrder",
      "description": "Order Resend to xOrder",
      "operationId": "resendToXOrderUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{orderItemId}/settle-order": {
    "post": {
      "tags": [
        "order-controller"
      ],
      "summary": "Settle Order",
      "description": "Settle Order",
      "operationId": "settleOrderUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "orderItemId",
          "in": "path",
          "description": "orderItemId",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/order/{uuid}/checkout": {
    "post": {
      "tags": [
        "order-controller"
      ],
      "summary": "Checkout Order",
      "description": "Checkout Order",
      "operationId": "checkoutOrderUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "path",
          "description": "uuid",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/payment/approve": {
    "post": {
      "tags": [
        "payment-controller"
      ],
      "summary": "Approve Payment",
      "description": "Receive payment confirmation from payment-router",
      "operationId": "approvePaymentUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ApprovePaymentRequest"
          }
        },
        {
          "name": "storeId",
          "in": "header",
          "description": "storeId",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "requestId",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/ApprovePaymentResponse"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/payment/check/order": {
    "post": {
      "tags": [
        "payment-controller"
      ],
      "summary": "Check Order Payment with Extended Data",
      "description": "Check Order Payment with extended data",
      "operationId": "checkOrderPaymentUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/CheckOrderPaymentRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«CheckOrderPaymentResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/payment/updatePaymentStatusAndExtendedData": {
    "post": {
      "tags": [
        "payment-controller"
      ],
      "summary": "Update Payment Status with Extended Data",
      "description": "Updating travel-ui payment status together with extended data",
      "operationId": "updatePaymentStatusAndExtDataUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/UpdatePaymentStatusRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/payment/validate/approve": {
    "post": {
      "tags": [
        "payment-controller"
      ],
      "summary": "Validate and Approve Payment",
      "description": "Receive payment confirmation from travel-ui",
      "operationId": "validateAndApproveUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/PaymentApprovalRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«PaymentApprovalResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/pdf/{itemType}/{pdfType}/{orderId}": {
    "get": {
      "tags": [
        "pdf-controller"
      ],
      "summary": "Get PDF by orderId",
      "description": "Generate PDF by orderId",
      "operationId": "getPdfByOrderIdUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "itemType",
          "in": "path",
          "description": "itemType",
          "required": true,
          "type": "string",
          "enum": [
            "FLIGHT",
            "RAIL",
            "HOTEL"
          ]
        },
        {
          "name": "pdfType",
          "in": "path",
          "description": "pdfType",
          "required": true,
          "type": "string",
          "enum": [
            "INVOICE",
            "TICKET"
          ]
        },
        {
          "name": "orderId",
          "in": "path",
          "description": "orderId",
          "required": true,
          "type": "string"
        },
        {
          "name": "customerLogonId",
          "in": "query",
          "description": "customerLogonId",
          "required": true,
          "type": "string"
        },
        {
          "name": "orderItemGroupId",
          "in": "query",
          "description": "orderItemGroupId",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«PdfResponse»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/systemParameter": {
    "get": {
      "tags": [
        "system-parameter-controller"
      ],
      "summary": "findSystemParameter",
      "operationId": "findSystemParameterUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "variable",
          "in": "query",
          "description": "variable",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«SystemParameterDTO»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    },
    "post": {
      "tags": [
        "system-parameter-controller"
      ],
      "summary": "createSystemParameter",
      "operationId": "createSystemParameterUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/SystemParameterDTO"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    },
    "delete": {
      "tags": [
        "system-parameter-controller"
      ],
      "summary": "deleteSystemParameter",
      "operationId": "deleteSystemParameterUsingDELETE",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "variable",
          "in": "query",
          "description": "variable",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "204": {
          "description": "No Content"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        }
      }
    }
  },
  "/api/v2/cart/{cartId}/book": {
    "post": {
      "tags": [
        "cart-v-2-controller"
      ],
      "summary": "Book Cart",
      "description": "Book Cart",
      "operationId": "bookCartUsingPOST_1",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "cartId",
          "in": "path",
          "description": "cartId",
          "required": true,
          "type": "string"
        },
        {
          "name": "itemType",
          "in": "query",
          "description": "itemType",
          "required": false,
          "type": "string",
          "default": "FLIGHT",
          "enum": [
            "FLIGHT",
            "RAIL",
            "HOTEL"
          ]
        },
        {
          "name": "language",
          "in": "query",
          "description": "language",
          "required": false,
          "type": "string"
        },
        {
          "name": "customerIp",
          "in": "query",
          "description": "customerIp",
          "required": false,
          "type": "string"
        },
        {
          "name": "userAgent",
          "in": "query",
          "description": "userAgent",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«CartBookResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/cart/{cartId}/bookV3": {
    "post": {
      "tags": [
        "cart-v-2-controller"
      ],
      "summary": "Book Cart V3",
      "description": "Book Cart V3",
      "operationId": "bookCartV3UsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "cartId",
          "in": "path",
          "description": "cartId",
          "required": true,
          "type": "string"
        },
        {
          "name": "itemType",
          "in": "query",
          "description": "itemType",
          "required": false,
          "type": "string",
          "default": "FLIGHT",
          "enum": [
            "FLIGHT",
            "RAIL",
            "HOTEL"
          ]
        },
        {
          "name": "language",
          "in": "query",
          "description": "language",
          "required": false,
          "type": "string"
        },
        {
          "name": "customerIp",
          "in": "query",
          "description": "customerIp",
          "required": false,
          "type": "string"
        },
        {
          "name": "userAgent",
          "in": "query",
          "description": "userAgent",
          "required": false,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«CartBookResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/cart/{cartId}/checkout": {
    "post": {
      "tags": [
        "cart-v-2-controller"
      ],
      "summary": "Checkout Cart",
      "description": "Checkout Cart",
      "operationId": "checkoutCartUsingPOST_1",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "cartId",
          "in": "path",
          "description": "cartId",
          "required": true,
          "type": "string"
        },
        {
          "name": "itemType",
          "in": "query",
          "description": "itemType",
          "required": false,
          "type": "string",
          "default": "FLIGHT",
          "enum": [
            "FLIGHT",
            "RAIL",
            "HOTEL"
          ]
        },
        {
          "name": "language",
          "in": "query",
          "description": "language",
          "required": false,
          "type": "string",
          "default": "id"
        },
        {
          "name": "hotelFormVersion",
          "in": "query",
          "description": "hotelFormVersion",
          "required": false,
          "type": "string",
          "default": "1"
        },
        {
          "in": "body",
          "name": "membershipTypeRequest",
          "description": "membershipTypeRequest",
          "required": true,
          "schema": {
            "$ref": "#/definitions/MembershipTypeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«CartResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/cart/{cartId}/item/passenger": {
    "put": {
      "tags": [
        "cart-v-2-controller"
      ],
      "summary": "Set Passenger",
      "description": "Set Passenger",
      "operationId": "setPassengerUsingPUT_1",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "cartId",
          "in": "path",
          "description": "cartId",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "cartPassengerRequest",
          "description": "cartPassengerRequest",
          "required": true,
          "schema": {
            "$ref": "#/definitions/CartPassengerRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«CartResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/order/cancel/pending/uuids": {
    "post": {
      "tags": [
        "order-cancel-v-2-controller"
      ],
      "summary": "Cancel Order Pending",
      "description": "Cancel Order Pending",
      "operationId": "cancelOrderPendingUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "in": "body",
          "name": "uuids",
          "description": "uuids",
          "required": true,
          "schema": {
            "$ref": "#/definitions/SimpleListRequest«string»"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«boolean»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/order/{uuid}": {
    "get": {
      "tags": [
        "order-v-2-controller"
      ],
      "summary": "Order Detail",
      "description": "Order Detail",
      "operationId": "getOrderDetailUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "path",
          "description": "uuid",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/order/{uuid}/checkout": {
    "post": {
      "tags": [
        "order-v-2-controller"
      ],
      "summary": "Checkout Order",
      "description": "Checkout Order",
      "operationId": "checkoutOrderUsingPOST_1",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "path",
          "description": "uuid",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/order/{uuid}/coupon/apply": {
    "put": {
      "tags": [
        "promotion-v-2-controller"
      ],
      "summary": "Apply Coupon Code",
      "description": "Apply Coupon Code",
      "operationId": "applyCouponCodeUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "path",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ApplyCouponCodeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/order/{uuid}/coupon/unapply": {
    "put": {
      "tags": [
        "promotion-v-2-controller"
      ],
      "summary": "Unapply Coupon Code",
      "description": "Unapply Coupon Code",
      "operationId": "unapplyCouponCodeUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "path",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/UnApplyCouponCodeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/order/{uuid}/pay": {
    "post": {
      "tags": [
        "order-v-2-controller"
      ],
      "summary": "Pay Order",
      "description": "Pay Order",
      "operationId": "payOrderUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "path",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/DoPaymentRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«DoPaymentResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/order/{uuid}/payment/change": {
    "post": {
      "tags": [
        "order-v-2-controller"
      ],
      "summary": "Change Payment",
      "description": "Change Payment",
      "operationId": "changePaymentUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "path",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ChangePaymentRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/order/{uuid}/payment/installment": {
    "get": {
      "tags": [
        "order-v-2-controller"
      ],
      "summary": "Installment Available",
      "description": "Installment Available",
      "operationId": "getInstallmentPaymentUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "path",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "name": "paymentMethod",
          "in": "query",
          "description": "paymentMethod",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«InstallmentSchemaResponse»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/order/{uuid}/payment/validInstallment": {
    "get": {
      "tags": [
        "order-v-2-controller"
      ],
      "summary": "Valid Installment Available",
      "description": "Valid Installment Available",
      "operationId": "getValidInstallmentPaymentUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "path",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "name": "paymentMethod",
          "in": "query",
          "description": "paymentMethod",
          "required": true,
          "type": "string"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«List«InstallmentInfoResponse»»"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/order/{uuid}/promo/apply": {
    "put": {
      "tags": [
        "promotion-v-2-controller"
      ],
      "summary": "Apply Promo Code",
      "description": "Apply Promo Code",
      "operationId": "applyPromoCodeUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "path",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/ApplyPromoCodeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/api/v2/order/{uuid}/promo/unapply": {
    "put": {
      "tags": [
        "promotion-v-2-controller"
      ],
      "summary": "Unapply Promo Code",
      "description": "Unapply Promo Code",
      "operationId": "unapplyPromoCodeUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "uuid",
          "in": "path",
          "description": "uuid",
          "required": true,
          "type": "string"
        },
        {
          "in": "body",
          "name": "request",
          "description": "request",
          "required": true,
          "schema": {
            "$ref": "#/definitions/UnApplyPromoCodeRequest"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/CartRevoResponse«OrderResponse»"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  },
  "/version": {
    "get": {
      "tags": [
        "gdn-version-controller"
      ],
      "summary": "version",
      "operationId": "versionUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "text/plain"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "type": "string"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    },
    "head": {
      "tags": [
        "gdn-version-controller"
      ],
      "summary": "version",
      "operationId": "versionUsingHEAD",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "text/plain"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "type": "string"
          }
        },
        "204": {
          "description": "No Content"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        }
      }
    },
    "post": {
      "tags": [
        "gdn-version-controller"
      ],
      "summary": "version",
      "operationId": "versionUsingPOST",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "text/plain"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "type": "string"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    },
    "put": {
      "tags": [
        "gdn-version-controller"
      ],
      "summary": "version",
      "operationId": "versionUsingPUT",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "text/plain"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "type": "string"
          }
        },
        "201": {
          "description": "Created"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    },
    "delete": {
      "tags": [
        "gdn-version-controller"
      ],
      "summary": "version",
      "operationId": "versionUsingDELETE",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "text/plain"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "type": "string"
          }
        },
        "204": {
          "description": "No Content"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        }
      }
    },
    "options": {
      "tags": [
        "gdn-version-controller"
      ],
      "summary": "version",
      "operationId": "versionUsingOPTIONS",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "text/plain"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "type": "string"
          }
        },
        "204": {
          "description": "No Content"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        }
      }
    },
    "patch": {
      "tags": [
        "gdn-version-controller"
      ],
      "summary": "version",
      "operationId": "versionUsingPATCH",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "text/plain"
      ],
      "parameters": [
        {
          "name": "storeId",
          "in": "header",
          "description": "client's store id",
          "required": true,
          "type": "string",
          "default": "10001"
        },
        {
          "name": "clientId",
          "in": "header",
          "description": "client's id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "channelId",
          "in": "header",
          "description": "client's channel id",
          "required": true,
          "type": "string",
          "default": "travel-web"
        },
        {
          "name": "username",
          "in": "header",
          "description": "client's username",
          "required": true,
          "type": "string",
          "default": "username"
        },
        {
          "name": "requestId",
          "in": "header",
          "description": "unique id per request",
          "required": true,
          "type": "string",
          "default": "RANDOM"
        },
        {
          "name": "businessChannel",
          "in": "header",
          "description": "business Channel",
          "required": true,
          "type": "string",
          "default": "travel-web"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "type": "string"
          }
        },
        "204": {
          "description": "No Content"
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        }
      }
    }
  }
}

// const keyname = "WalletPaymentMethodDTO"
const premitive = ['string', 'integer', 'boolean']
const premitiveValue = {
  string: 'string',
  integer: 0,
  boolean: false
}

const objectConstructor = (property, definitions) => {
  if ('type' in property) {
    if (property.type === 'object') {
      const classObj = {}
      for (let prop in property.properties || {}) {
        classObj[prop] = objectConstructor(property.properties[prop], definitions )
      }
      return classObj
    } else if (premitive.includes(property.type)) {
      return premitiveValue[property.type]
    } else if (property.type === 'array') {
      return [ objectConstructor(property.items, definitions) ]
    }
  } if ('$ref' in property) {
    return objectConstructor(definitions[property.$ref.split('/')[2]], definitions)
  }
}

const parameterFormatter = (parameter) => {
  const obj = {}
  obj.name = parameter.name
  obj.description = parameter.description
  obj.required = parameter.required
  obj.hasOptions = 'enum' in parameter
  if (obj.hasOptions) {
    obj.options = parameter.enum
  }
  obj.type = parameter.type
  obj.value = parameter.default || ''
  return obj
}

const apiConstructor = (path, method, data) => {
  const apiObject = data[path][method]
  const resObj = {}
  resObj.path = path
  resObj.resMethod = method
  resObj.summary = apiObject.summary
  resObj.description = apiObject.description
  resObj.consumes = apiObject.consumes
  resObj.produces = apiObject.produces
  resObj.pathParam = apiObject.parameters.filter(parameter => parameter.in === 'path').map(parameterFormatter)
  resObj.query = apiObject.parameters.filter(parameter => parameter.in === 'query').map(parameterFormatter)
  resObj.header = apiObject.parameters.filter(parameter => parameter.in === 'header').map(parameterFormatter)
  if (resObj.method !== 'get') {
    resObj.body = apiObject.parameters.filter(parameter => parameter.in === 'body')
    if (resObj.body.length) {
      resObj.body = objectConstructor(resObj.body[0].schema, definitions)
    }
  }
  resObj.response = objectConstructor(apiObject.responses['200'].schema, definitions)
  return resObj
}

console.log(JSON.stringify(apiConstructor('/api/cart/resendEmailConfirmation', 'post', paths), null, 2))