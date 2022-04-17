package com.mycitynew.springjwt.util;

import java.nio.file.Path;
import java.nio.file.Paths;

public final class HostelUtil {

  private HostelUtil() {
    // restrict instantiation
  }

  public static final String folderPath =  "hostel-files//";
  public static final Path filePath = Paths.get(folderPath);

}

