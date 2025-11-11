package com.email.writer;

import lombok.Data;

import java.util.Collection;

//ye class represent krti hai ki request kis tarah se ayengi
@Data
public class EmailRequest {
    private String emailContent;
    private String tone;

}
